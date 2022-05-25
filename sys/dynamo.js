const AWS = require("aws-sdk");
AWS.config.loadFromPath("./config.json"); 
exports.dynamoDb = new AWS.DynamoDB.DocumentClient();