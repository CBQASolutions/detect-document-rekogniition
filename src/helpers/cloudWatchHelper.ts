import { CloudWatchClient, PutMetricDataCommand } from "@aws-sdk/client-cloudwatch";
import { CloudWatchDimensionName, CloudWatchDimensionsUnit, CloudWatchMetricName, TrackedOperations } from "@enums/CloudWatchEnums";
import { PROJECT_NAME, REGION, STAGE, logger } from "@config/projectConfig";

const cloudWatchClient = new CloudWatchClient({ region: REGION });

export async function increaseCloudWatchMetricCount(
  functionName: TrackedOperations
): Promise<void> {
  try {
    const command = new PutMetricDataCommand({
      MetricData: [
        {
          MetricName: CloudWatchMetricName.FUNCTION_INVOCATION,
          Dimensions: [
            {
              Name: CloudWatchDimensionName.FUNCTION_NAME,
              Value: functionName,
            },
          ],
          Value: 1,
          Unit: CloudWatchDimensionsUnit.COUNT,
        },
      ],
      Namespace: `${PROJECT_NAME}/${STAGE}/Functions`,
    });
    await cloudWatchClient.send(command);
  } catch (error) {
    logger.error(
      `Failed to send metric data ( ${functionName} )`,
      error as Error
    );
  }
}