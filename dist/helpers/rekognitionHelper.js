"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectDocument = exports.rekognitionClient = void 0;
const client_rekognition_1 = require("@aws-sdk/client-rekognition");
const projectConfig_1 = require("@config/projectConfig");
const CloudWatchEnums_1 = require("@enums/CloudWatchEnums");
const RekognitionEnums_1 = require("@enums/RekognitionEnums");
const RekognitionExceptions_1 = require("@exceptions/RekognitionExceptions");
const cloudWatchHelper_1 = require("@helpers/cloudWatchHelper");
const GeneralExceptions_1 = require("@exceptions/GeneralExceptions");
const JobEnums_1 = require("@enums/JobEnums");
const s3Helper_1 = require("./s3Helper");
exports.rekognitionClient = new client_rekognition_1.Rekognition({
    region: projectConfig_1.REGION,
});
async function detectLabels(s3FileKey) {
    const labelConfidences = [];
    try {
        const detectCustomLabelsInput = {
            Image: {
                S3Object: {
                    Bucket: projectConfig_1.S3_BUCKET_NAME,
                    Name: s3FileKey,
                },
            },
        };
        const { Labels } = await exports.rekognitionClient.detectLabels(detectCustomLabelsInput);
        if (!Labels) {
            throw new RekognitionExceptions_1.LabelsNotFoundException();
        }
        const allowedLabels = Object.values(RekognitionEnums_1.AllowedRekognitionLabels);
        const areLabelsValid = allowedLabels.every((allowedLabel) => {
            const labelConfidence = { name: allowedLabel, value: 0 };
            const isLabelValid = Labels.some(({ Name, Confidence }) => {
                const isSameLabel = Name === allowedLabel;
                if (isSameLabel) {
                    labelConfidence.value = Confidence;
                }
                return (isSameLabel &&
                    Confidence >= projectConfig_1.REKOGNITION_MIN_DOCUMENT_CONFIDENCE);
            });
            labelConfidences.push(labelConfidence);
            return isLabelValid;
        });
        if (!areLabelsValid) {
            throw new RekognitionExceptions_1.LabelsInvalidDocumentException();
        }
        await (0, cloudWatchHelper_1.increaseCloudWatchMetricCount)(CloudWatchEnums_1.TrackedOperations.REKOGNITION_DETECT_LABELS);
        return { value: labelConfidences };
    }
    catch (error) {
        projectConfig_1.logger.error(error);
        if (error instanceof GeneralExceptions_1.BackendCustomException) {
            return { value: labelConfidences, error };
        }
        else {
            throw new RekognitionExceptions_1.LabelsDetectionException('', error);
        }
    }
}
async function verifyTextInImage(fileKey) {
    await (0, cloudWatchHelper_1.increaseCloudWatchMetricCount)(CloudWatchEnums_1.TrackedOperations.REKOGNITION_DETECT_TEXT);
    try {
        const detectTextCommand = new client_rekognition_1.DetectTextCommand({
            Image: {
                S3Object: {
                    Bucket: projectConfig_1.S3_BUCKET_NAME,
                    Name: fileKey,
                },
            },
            Filters: {
                WordFilter: {
                    MinConfidence: +projectConfig_1.REKOGNITION_MIN_TEXT_CONFIDENCE,
                },
            },
        });
        const { TextDetections } = await exports.rekognitionClient.send(detectTextCommand);
        if (!TextDetections || TextDetections.length < 1) {
            return {
                analysisStatus: JobEnums_1.AnalysisStatuses.INVALID_TEXT,
                validity: 0,
                error: new RekognitionExceptions_1.TextNotFoundException(),
            };
        }
        let analysisStatus = JobEnums_1.AnalysisStatuses.INVALID_DOCUMENT;
        let validity = 0;
        const INEWordsValidity = areWordsValid(TextDetections, Object.values(RekognitionEnums_1.AllowedINEWords));
        if (INEWordsValidity >= +projectConfig_1.CUSTOM_MIN_INE_WORD_CONFIDENCE) {
            analysisStatus = JobEnums_1.AnalysisStatuses.PROBABLY_INE;
            validity = getValidity(+projectConfig_1.CUSTOM_MIN_INE_WORD_CONFIDENCE);
            const INEPhrasesValidity = areWordsValid(TextDetections, Object.values(RekognitionEnums_1.AllowedINEPhrases));
            if (INEPhrasesValidity >= +projectConfig_1.CUSTOM_MIN_INE_PHRASE_CONFIDENCE) {
                analysisStatus = JobEnums_1.AnalysisStatuses.VALID_INE;
                validity = getValidity(+projectConfig_1.CUSTOM_MIN_INE_PHRASE_CONFIDENCE);
            }
            return { analysisStatus, validity };
        }
        const driversLicenseValidity = areWordsValid(TextDetections, Object.values(RekognitionEnums_1.DriversLicenceWords));
        if (driversLicenseValidity > 0) {
            return { analysisStatus, validity, error: new RekognitionExceptions_1.TextNotValidException() };
        }
        const passportWordsValidity = areWordsValid(TextDetections, Object.values(RekognitionEnums_1.AllowedPassportWords));
        if (passportWordsValidity >= +projectConfig_1.CUSTOM_MIN_PASSPORT_WORD_CONFIDENCE) {
            analysisStatus = JobEnums_1.AnalysisStatuses.PROBABLY_PASSPORT;
            validity = getValidity(+projectConfig_1.CUSTOM_MIN_PASSPORT_WORD_CONFIDENCE);
            const passportPhrasesValidity = areWordsValid(TextDetections, Object.values(RekognitionEnums_1.AllowedPassportPhrases));
            if (passportPhrasesValidity >= +projectConfig_1.CUSTOM_MIN_PASSPORT_PHRASE_CONFIDENCE) {
                validity = getValidity(+projectConfig_1.CUSTOM_MIN_PASSPORT_PHRASE_CONFIDENCE);
                analysisStatus = JobEnums_1.AnalysisStatuses.VALID_PASSPORT;
            }
            return { analysisStatus, validity };
        }
        return { analysisStatus, validity, error: new RekognitionExceptions_1.TextNotValidException() };
    }
    catch (error) {
        projectConfig_1.logger.error(error);
        if (error instanceof GeneralExceptions_1.BackendCustomException) {
            throw error;
        }
        else {
            throw new RekognitionExceptions_1.TextVerificationException('', error);
        }
    }
}
function areWordsValid(toBeCheckedWords, allowedWords) {
    const allowedWordsLength = allowedWords.length;
    const filteredWords = toBeCheckedWords.filter(({ DetectedText }) => {
        const allowedWordIndex = allowedWords.findIndex((allowedWord) => allowedWord === DetectedText?.toUpperCase());
        if (allowedWordIndex > -1) {
            allowedWords.splice(allowedWordIndex, 1);
            return true;
        }
        return false;
    });
    const validity = (filteredWords.length / allowedWordsLength) * 100;
    return validity;
}
function getValidity(minValidity) {
    let min = 90;
    if (minValidity < 90) {
        min = minValidity + 10;
    }
    return +(Math.random() * (100 - min) + min).toFixed(2);
}
async function detectDocument(sourceImagesS3Path, jobId) {
    let documentConfidence = 0;
    let analysisStatus = JobEnums_1.AnalysisStatuses.DOCUMENT_ANALYSIS;
    const labelConfidencesResult = await detectLabels(sourceImagesS3Path);
    if (labelConfidencesResult.error) {
        documentConfidence = +(labelConfidencesResult.value
            .find(({ value }) => value < projectConfig_1.REKOGNITION_MIN_DOCUMENT_CONFIDENCE)
            ?.value.toFixed(2) ?? 0);
        return { value: { documentConfidence, analysisStatus }, error: labelConfidencesResult.error };
    }
    //Verify texts
    analysisStatus = JobEnums_1.AnalysisStatuses.DOCUMENT_TYPE_ANALYSIS;
    await (0, s3Helper_1.updateJob)(jobId, { analysisStatus });
    const textValidationResponse = await verifyTextInImage(sourceImagesS3Path);
    documentConfidence = textValidationResponse.validity;
    if (textValidationResponse.error) {
        return { value: { documentConfidence, analysisStatus }, error: labelConfidencesResult.error };
    }
}
exports.detectDocument = detectDocument;
