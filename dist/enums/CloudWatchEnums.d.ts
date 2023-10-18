export declare enum TrackedOperations {
    AUTHORIZER_SUCCESS = "AuthorizerSuccess",
    AUTHORIZER_FAILED = "AuthorizerFailed",
    REKOGNITION_COMPARE_FACES = "CompareFaces",
    REKOGNITION_DETECT_LABELS = "DetectLabels",
    REKOGNITION_DETECT_TEXT = "DetectText",
    SUCCESS_REQUEST = "LambdaSuccess",
    FAILED_REQUEST = "LambdaFailed"
}
export declare enum CloudWatchMetricName {
    FUNCTION_INVOCATION = "FunctionInvocations"
}
export declare enum CloudWatchDimensionName {
    FUNCTION_NAME = "FunctionName"
}
export declare enum CloudWatchDimensionsUnit {
    COUNT = "Count"
}
export declare enum CloudWatchStatistics {
    SAMPLE_COUNT = "SampleCount"
}
