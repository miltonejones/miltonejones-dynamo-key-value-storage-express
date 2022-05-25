const { asyncTry, dynamoDb, TableName } = require('../sys');
  
/**
 * reads all items from the remote storage table 
 * @returns list of items
 */
exports.getItems = async () => {   
  const { Items } =  await dynamoDb.scan({ TableName }).promise();   
  return Items;
};
  
  
