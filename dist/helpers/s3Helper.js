"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJob = void 0;
const JobModel_1 = require("@entities/JobModel");
const JobEnums_1 = require("@enums/JobEnums");
const dynamo_easy_1 = require("@shiftcoders/dynamo-easy");
const generalHelpers_1 = require("@helpers/generalHelpers");
const JobExceptions_1 = require("@exceptions/JobExceptions");
async function updateJob(id, updatedProps, replace = false) {
    try {
        const { PK, SK, LSIA } = JobEnums_1.DynamoAttributes;
        if (replace) {
            await JobModel_1.JobStore.put(updatedProps)
                .onlyIfAttribute(SK)
                .attributeExists()
                .exec();
        }
        else {
            const operations = [];
            Object.entries(updatedProps).forEach(([key, value]) => {
                if (key != PK &&
                    key != SK &&
                    key != LSIA &&
                    (0, generalHelpers_1.isNotEmptyProperty)(value)) {
                    operations.push((0, dynamo_easy_1.update)(key).set(value));
                }
            });
            await JobModel_1.JobStore.update(JobEnums_1.PKs.JOB, id)
                .operations(...operations)
                .onlyIfAttribute(SK)
                .attributeExists()
                .exec();
        }
    }
    catch (error) {
        const err = error;
        throw new JobExceptions_1.JobUpdateException(err.message, err);
    }
}
exports.updateJob = updateJob;
