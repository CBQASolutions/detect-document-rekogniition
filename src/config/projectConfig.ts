// Used for Dynamo-Easy
import 'reflect-metadata';
import { LambdaLog } from 'lambda-log';
import { DynamoDB } from '@aws-sdk/client-dynamodb';

export const {
  REGION,
  S3_BUCKET_NAME,
  REKOGNITION_MIN_DOCUMENT_CONFIDENCE,
  REKOGNITION_MIN_TEXT_CONFIDENCE,
  CUSTOM_MIN_INE_WORD_CONFIDENCE,
  CUSTOM_MIN_INE_PHRASE_CONFIDENCE,
  CUSTOM_MIN_PASSPORT_WORD_CONFIDENCE,
  CUSTOM_MIN_PASSPORT_PHRASE_CONFIDENCE,
  PROJECT_NAME,
  STAGE,
  DYNAMO_DB_TABLE_NAME,
  
} = process.env


// LambdaLog Global Configuration
export const logger = new LambdaLog({ debug: true });