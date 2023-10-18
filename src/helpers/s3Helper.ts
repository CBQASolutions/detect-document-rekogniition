import { UpdateExpressionDefinitionFunction, update } from "@shiftcoders/dynamo-easy";

import { JobModel, JobStore } from '../entities/JobModel';
import { DynamoAttributes, PKs } from '../enums/JobEnums';
import { isNotEmptyProperty } from '../helpers/generalHelpers';
import { JobUpdateException } from '../exceptions/JobExceptions';

export async function updateJob(
  id: string,
  updatedProps: Partial<JobModel>,
  replace = false
) {
  try {
    const { PK, SK, LSIA } = DynamoAttributes;

    if (replace) {
      await JobStore.put(updatedProps as JobModel)
        .onlyIfAttribute(SK)
        .attributeExists()
        .exec();
    } else {
      const operations: UpdateExpressionDefinitionFunction[] = [];
      Object.entries(updatedProps).forEach(([key, value]) => {
        if (
          key != PK &&
          key != SK &&
          key != LSIA &&
          isNotEmptyProperty(value)
        ) {
          operations.push(update(key).set(value));
        }
      });
      await JobStore.update(PKs.JOB, id)
        .operations(...operations)
        .onlyIfAttribute(SK)
        .attributeExists()
        .exec();
    }
  } catch (error) {
    const err = error as Error;
    throw new JobUpdateException(err.message, err);
  }
}