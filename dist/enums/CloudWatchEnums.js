"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWatchStatistics = exports.CloudWatchDimensionsUnit = exports.CloudWatchDimensionName = exports.CloudWatchMetricName = exports.TrackedOperations = void 0;
var TrackedOperations;
(function (TrackedOperations) {
    TrackedOperations["AUTHORIZER_SUCCESS"] = "AuthorizerSuccess";
    TrackedOperations["AUTHORIZER_FAILED"] = "AuthorizerFailed";
    TrackedOperations["REKOGNITION_COMPARE_FACES"] = "CompareFaces";
    TrackedOperations["REKOGNITION_DETECT_LABELS"] = "DetectLabels";
    TrackedOperations["REKOGNITION_DETECT_TEXT"] = "DetectText";
    TrackedOperations["SUCCESS_REQUEST"] = "LambdaSuccess";
    TrackedOperations["FAILED_REQUEST"] = "LambdaFailed";
})(TrackedOperations || (exports.TrackedOperations = TrackedOperations = {}));
var CloudWatchMetricName;
(function (CloudWatchMetricName) {
    CloudWatchMetricName["FUNCTION_INVOCATION"] = "FunctionInvocations";
})(CloudWatchMetricName || (exports.CloudWatchMetricName = CloudWatchMetricName = {}));
var CloudWatchDimensionName;
(function (CloudWatchDimensionName) {
    CloudWatchDimensionName["FUNCTION_NAME"] = "FunctionName";
})(CloudWatchDimensionName || (exports.CloudWatchDimensionName = CloudWatchDimensionName = {}));
var CloudWatchDimensionsUnit;
(function (CloudWatchDimensionsUnit) {
    CloudWatchDimensionsUnit["COUNT"] = "Count";
})(CloudWatchDimensionsUnit || (exports.CloudWatchDimensionsUnit = CloudWatchDimensionsUnit = {}));
var CloudWatchStatistics;
(function (CloudWatchStatistics) {
    CloudWatchStatistics["SAMPLE_COUNT"] = "SampleCount";
})(CloudWatchStatistics || (exports.CloudWatchStatistics = CloudWatchStatistics = {}));
