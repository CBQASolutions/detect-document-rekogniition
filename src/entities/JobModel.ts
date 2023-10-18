import {
  DynamoStore,
  LSISortKey,
  Model,
  PartitionKey,
  SortKey,
} from '@shiftcoders/dynamo-easy';
import { v4 as uuid } from 'uuid';

import { DYNAMO_DB_TABLE_NAME, dynamoDB } from '../config/projectConfig';
import {
  AnalysisStatuses,
  DynamoIndexes,
  JobStatuses,
  PKs,
  WebhookResponses,
} from '../enums/JobEnums';

@Model({ tableName: DYNAMO_DB_TABLE_NAME })
export class JobModel {
  @PartitionKey()
  pk: string;
  @SortKey()
  sk: string;
  @LSISortKey(DynamoIndexes.LSIA)
  lsia: number;
  @LSISortKey(DynamoIndexes.LSIB)
  lsib: string;

  // Job properties
  jobStatus: JobStatuses;
  analysisStatus: AnalysisStatuses;
  faceSimilarity?: number[];
  documentConfidence?: number;
  webhookResponse?: WebhookResponses;

  webhook: string;

  //File properties
  sourceImagesS3Path?: string;
  targetImagesS3Path?: string;

  constructor(id: string, webhook: string) {
    this.pk = PKs.JOB;
    this.sk = id;
    this.jobStatus = JobStatuses.PENDING_UPLOAD;
    this.analysisStatus = AnalysisStatuses.NOT_ANALYSED;
    this.lsia = Date.now();
    this.lsib = uuid();
    this.webhook = webhook;
    this.sourceImagesS3Path = '';
    this.targetImagesS3Path = '';
  }
}

export const JobStore = new DynamoStore(JobModel, dynamoDB);
