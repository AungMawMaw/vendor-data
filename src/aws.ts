import AWS from "aws-sdk";
import { AWSRegions } from "./types/aws";

AWS.config.update({ region: AWSRegions.US_EAST_1 });

const { DynamoDB } = AWS;
const dynamodb = new DynamoDB();

// 1. create a table
export const dynamodb_createTable = async (
  params: AWS.DynamoDB.CreateTableInput,
) => {
  try {
    const result = await dynamodb.createTable(params).promise();
    console.log("Table created", result);
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("dynamodb_createTable error obj unknown type");
  }
};
// 2. describe a table
// 3. delete a table
// 4. create a record
