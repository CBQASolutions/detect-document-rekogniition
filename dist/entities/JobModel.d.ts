import { DynamoStore } from '@shiftcoders/dynamo-easy';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { AnalysisStatuses, JobStatuses, WebhookResponses } from '@enums/JobEnums';
export declare const dynamoDB: DynamoDB;
export declare class JobModel {
    pk: string;
    sk: string;
    lsia: number;
    lsib: string;
    jobStatus: JobStatuses;
    analysisStatus: AnalysisStatuses;
    faceSimilarity?: number[];
    documentConfidence?: number;
    webhookResponse?: WebhookResponses;
    webhook: string;
    sourceImagesS3Path?: string;
    targetImagesS3Path?: string;
    constructor(id: string, webhook: string);
}
export declare const JobStore: DynamoStore<JobModel>;
