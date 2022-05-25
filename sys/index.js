
const { asyncTry } = require("./asyncTry");
const { arrayToObject} = require("./arrayToObject");
const { dynamoDb } = require('./dynamo');


const TableName = 'dynamo-key-value-storage-remote-store-dev';


module.exports = { asyncTry, dynamoDb, TableName, arrayToObject };