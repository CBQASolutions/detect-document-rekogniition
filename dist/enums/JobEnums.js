"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoAttributes = exports.PKs = exports.WebhookResponses = exports.JobStatuses = exports.DynamoIndexes = exports.AnalysisStatuses = void 0;
var AnalysisStatuses;
(function (AnalysisStatuses) {
    AnalysisStatuses["NOT_ANALYSED"] = "NOT_ANALYSED";
    AnalysisStatuses["DOCUMENT_ANALYSIS"] = "DOCUMENT_ANALYSIS";
    AnalysisStatuses["DOCUMENT_TYPE_ANALYSIS"] = "DOCUMENT_TYPE_ANALYSIS";
    AnalysisStatuses["INVALID_DOCUMENT"] = "INVALID_DOCUMENT";
    AnalysisStatuses["FACE_ANALYSIS"] = "FACE_ANALYSIS";
    AnalysisStatuses["FACE_MISSMATCH"] = "FACE_MISSMATCH";
    AnalysisStatuses["MULTIPLE_FACES"] = "MULTIPLE_FACES";
    AnalysisStatuses["INVALID_TEXT"] = "INVALID_TEXT";
    AnalysisStatuses["PROBABLY_INE"] = "PROBABLY_INE";
    AnalysisStatuses["VALID_INE"] = "VALID_INE";
    AnalysisStatuses["PROBABLY_PASSPORT"] = "PROBABLY_PASSPORT";
    AnalysisStatuses["VALID_PASSPORT"] = "VALID_PASSPORT";
    AnalysisStatuses["SUCCESS"] = "SUCCESS";
    AnalysisStatuses["ERROR"] = "ERROR";
})(AnalysisStatuses || (exports.AnalysisStatuses = AnalysisStatuses = {}));
var DynamoIndexes;
(function (DynamoIndexes) {
    DynamoIndexes["LSIA"] = "lsia-index";
    DynamoIndexes["LSIB"] = "lsib-index";
})(DynamoIndexes || (exports.DynamoIndexes = DynamoIndexes = {}));
var JobStatuses;
(function (JobStatuses) {
    JobStatuses["PENDING_UPLOAD"] = "PENDING_UPLOAD";
    JobStatuses["ANALYSIS_IN_PROGRESS"] = "ANALYSIS_IN_PROGRESS";
    JobStatuses["ANALYZED"] = "ANALYZED";
    JobStatuses["NOTIFIED"] = "NOTIFIED";
    JobStatuses["UNABLE_NOTIFY"] = "UNABLE_NOTIFY";
    JobStatuses["ERROR"] = "ERROR";
})(JobStatuses || (exports.JobStatuses = JobStatuses = {}));
var WebhookResponses;
(function (WebhookResponses) {
    WebhookResponses["FACE_MISSMATCH"] = "FACE_MISSMATCH";
    WebhookResponses["FACE_MATCH"] = "FACE_MATCH";
    WebhookResponses["MULTIPLE_FACES"] = "MULTIPLE_FACES";
    WebhookResponses["INVALID_DOCUMENT"] = "INVALID_DOCUMENT";
    WebhookResponses["ERROR"] = "ERROR";
})(WebhookResponses || (exports.WebhookResponses = WebhookResponses = {}));
var PKs;
(function (PKs) {
    PKs["JOB"] = "JOB";
})(PKs || (exports.PKs = PKs = {}));
var DynamoAttributes;
(function (DynamoAttributes) {
    DynamoAttributes["PK"] = "pk";
    DynamoAttributes["SK"] = "sk";
    DynamoAttributes["LSIA"] = "lsia";
    DynamoAttributes["LSIB"] = "lsib";
})(DynamoAttributes || (exports.DynamoAttributes = DynamoAttributes = {}));
