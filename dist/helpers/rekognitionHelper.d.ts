import { Rekognition } from '@aws-sdk/client-rekognition';
import { BackendCustomException } from '@exceptions/GeneralExceptions';
import { AnalysisStatuses } from '@enums/JobEnums';
export declare const rekognitionClient: Rekognition;
export declare function detectDocument(sourceImagesS3Path: string, jobId: string): Promise<{
    value: {
        documentConfidence: number;
        analysisStatus: AnalysisStatuses.DOCUMENT_ANALYSIS;
    };
    error: BackendCustomException;
} | {
    value: {
        documentConfidence: number;
        analysisStatus: AnalysisStatuses.DOCUMENT_TYPE_ANALYSIS;
    };
    error: undefined;
} | undefined>;
