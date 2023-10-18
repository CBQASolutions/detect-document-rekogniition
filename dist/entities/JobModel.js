"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStore = exports.JobModel = exports.dynamoDB = void 0;
const dynamo_easy_1 = require("@shiftcoders/dynamo-easy");
const uuid_1 = require("uuid");
const projectConfig_1 = require("@config/projectConfig");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const JobEnums_1 = require("@enums/JobEnums");
exports.dynamoDB = new client_dynamodb_1.DynamoDB({ region: projectConfig_1.REGION });
let JobModel = class JobModel {
    constructor(id, webhook) {
        this.pk = JobEnums_1.PKs.JOB;
        this.sk = id;
        this.jobStatus = JobEnums_1.JobStatuses.PENDING_UPLOAD;
        this.analysisStatus = JobEnums_1.AnalysisStatuses.NOT_ANALYSED;
        this.lsia = Date.now();
        this.lsib = (0, uuid_1.v4)();
        this.webhook = webhook;
        this.sourceImagesS3Path = '';
        this.targetImagesS3Path = '';
    }
};
exports.JobModel = JobModel;
__decorate([
    (0, dynamo_easy_1.PartitionKey)(),
    __metadata("design:type", String)
], JobModel.prototype, "pk", void 0);
__decorate([
    (0, dynamo_easy_1.SortKey)(),
    __metadata("design:type", String)
], JobModel.prototype, "sk", void 0);
__decorate([
    (0, dynamo_easy_1.LSISortKey)(JobEnums_1.DynamoIndexes.LSIA),
    __metadata("design:type", Number)
], JobModel.prototype, "lsia", void 0);
__decorate([
    (0, dynamo_easy_1.LSISortKey)(JobEnums_1.DynamoIndexes.LSIB),
    __metadata("design:type", String)
], JobModel.prototype, "lsib", void 0);
exports.JobModel = JobModel = __decorate([
    (0, dynamo_easy_1.Model)({ tableName: projectConfig_1.DYNAMO_DB_TABLE_NAME }),
    __metadata("design:paramtypes", [String, String])
], JobModel);
exports.JobStore = new dynamo_easy_1.DynamoStore(JobModel, exports.dynamoDB);
