export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STAGE: string;
      REGION: string;
      DB_USER: string;
      S3_BUCKET_NAME: string;
      DYNAMO_DB_TABLE_NAME: string;
      STAGE: 'dev' | 'prod' | 'staging';
      S3_GET_PRESIGN_DEFAULT_EXPIRATION: number;
      // 0-100
      MIN_REKOGNITION_CONFIDENCE: number;
      SECRETS_MANAGER_SECRET_NAME: string;
      PROJECT_NAME: string;
      REKOGNITION_MIN_DOCUMENT_CONFIDENCE: number;
      REKOGNITION_MIN_FACE_CONFIDENCE: number;
      REKOGNITION_MIN_TEXT_CONFIDENCE: number;
      CUSTOM_MIN_INE_WORD_CONFIDENCE: number;
      CUSTOM_MIN_INE_PHRASE_CONFIDENCE: number;
      CUSTOM_MIN_PASSPORT_WORD_CONFIDENCE: number;
      CUSTOM_MIN_PASSPORT_PHRASE_CONFIDENCE: number;
      PROVIDER_ROLE_ARN: string;
      PARAM_LIMITS_NAME: string;
    }
  }
}
