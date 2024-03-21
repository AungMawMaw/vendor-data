import {
  dynamodb_createTable,
  dynamodb_deleteTable,
  dynamodb_descriveTable,
} from "./aws";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const init = async () => {
  const vendors_tableName = "vendors";
  const vendors_table = await dynamodb_descriveTable(vendors_tableName);

  if (!(vendors_table instanceof Error)) {
    //Delete table
    await dynamodb_deleteTable(vendors_tableName);
  }

  // const vendors_tableParams: AWS.DynamoDB.CreateTableInput = {
  //   TableName: vendors_tableName,
  //   KeySchema: [{ AttributeName: "twitterId", KeyType: "HASH" }],
  //   AttributeDefinitions: [{ AttributeName: "twitterId", AttributeType: "S" }],
  //   ProvisionedThroughput: {
  //     ReadCapacityUnits: 10,
  //     WriteCapacityUnits: 10,
  //   },
  // };
  // dynamodb_createTable(vendors_tableParams);
};
init();
