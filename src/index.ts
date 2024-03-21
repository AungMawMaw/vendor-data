import {
  dynamodb_createRecord,
  dynamodb_createTable,
  dynamodb_deleteTable,
  dynamodb_descriveTable,
} from "./aws";
import vendors from "./data/vendors";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const init = async () => {
  const vendors_tableName = "vendors";
  const vendors_table = await dynamodb_descriveTable(vendors_tableName);

  if (!(vendors_table instanceof Error)) {
    //Delete table
    await dynamodb_deleteTable(vendors_tableName);
    await delay(6000);
  }

  const vendors_tableParams: AWS.DynamoDB.CreateTableInput = {
    TableName: vendors_tableName,
    KeySchema: [{ AttributeName: "twitterId", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "twitterId", AttributeType: "S" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  };
  await dynamodb_createTable(vendors_tableParams);
  await delay(12000);
  for (const i in vendors) {
    const vendor = vendors[i];
    const res = await dynamodb_createRecord(vendors_tableName, vendor);
    if (res instanceof Error) {
      console.log("Error", vendor, res);
    }
  }
};
init();
