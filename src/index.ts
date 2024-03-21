import { dynamodb_createTable } from "./aws";

const vendors_tableParams: AWS.DynamoDB.CreateTableInput = {
  TableName: "vendors",
  KeySchema: [{ AttributeName: "twitterId", KeyType: "HASH" }],
  AttributeDefinitions: [{ AttributeName: "twitterId", AttributeType: "S" }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb_createTable(vendors_tableParams);
