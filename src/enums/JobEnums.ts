export enum AnalysisStatuses {
  NOT_ANALYSED = 'NOT_ANALYSED',
  DOCUMENT_ANALYSIS = 'DOCUMENT_ANALYSIS',
  DOCUMENT_TYPE_ANALYSIS = 'DOCUMENT_TYPE_ANALYSIS',
  INVALID_DOCUMENT = 'INVALID_DOCUMENT',
  FACE_ANALYSIS = 'FACE_ANALYSIS',
  FACE_MISSMATCH = 'FACE_MISSMATCH',
  MULTIPLE_FACES = 'MULTIPLE_FACES',
  INVALID_TEXT = 'INVALID_TEXT',
  PROBABLY_INE = 'PROBABLY_INE',
  VALID_INE = 'VALID_INE',
  PROBABLY_PASSPORT = 'PROBABLY_PASSPORT',
  VALID_PASSPORT = 'VALID_PASSPORT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface TextValidationResponse {
  analysisStatus: AnalysisStatuses;
  validity: number;
}

export enum DynamoIndexes {
  LSIA = 'lsia-index',
  LSIB = 'lsib-index',
}

export enum JobStatuses {
  PENDING_UPLOAD = 'PENDING_UPLOAD',
  ANALYSIS_IN_PROGRESS = 'ANALYSIS_IN_PROGRESS',
  ANALYZED = 'ANALYZED',
  NOTIFIED = 'NOTIFIED',
  UNABLE_NOTIFY = 'UNABLE_NOTIFY',
  ERROR = 'ERROR',
}

export enum WebhookResponses {
  FACE_MISSMATCH = 'FACE_MISSMATCH',
  FACE_MATCH = 'FACE_MATCH',
  MULTIPLE_FACES = 'MULTIPLE_FACES',
  INVALID_DOCUMENT = 'INVALID_DOCUMENT',
  ERROR = 'ERROR',
}

export enum PKs {
  JOB = 'JOB',
}


export enum DynamoAttributes {
  PK = 'pk',
  SK = 'sk',
  LSIA = 'lsia',
  LSIB = 'lsib',
}