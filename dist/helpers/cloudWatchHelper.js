"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.increaseCloudWatchMetricCount = void 0;
const client_cloudwatch_1 = require("@aws-sdk/client-cloudwatch");
const CloudWatchEnums_1 = require("@enums/CloudWatchEnums");
const projectConfig_1 = require("@config/projectConfig");
const cloudWatchClient = new client_cloudwatch_1.CloudWatchClient({ region: projectConfig_1.REGION });
async function increaseCloudWatchMetricCount(functionName) {
    try {
        const command = new client_cloudwatch_1.PutMetricDataCommand({
            MetricData: [
                {
                    MetricName: CloudWatchEnums_1.CloudWatchMetricName.FUNCTION_INVOCATION,
                    Dimensions: [
                        {
                            Name: CloudWatchEnums_1.CloudWatchDimensionName.FUNCTION_NAME,
                            Value: functionName,
                        },
                    ],
                    Value: 1,
                    Unit: CloudWatchEnums_1.CloudWatchDimensionsUnit.COUNT,
                },
            ],
            Namespace: `${projectConfig_1.PROJECT_NAME}/${projectConfig_1.STAGE}/Functions`,
        });
        await cloudWatchClient.send(command);
    }
    catch (error) {
        projectConfig_1.logger.error(`Failed to send metric data ( ${functionName} )`, error);
    }
}
exports.increaseCloudWatchMetricCount = increaseCloudWatchMetricCount;
