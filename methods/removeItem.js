const { asyncTry, dynamoDb, TableName } = require('../sys');

/**
 * reads an item from the remote storage table
 * @param {string} auth_key 
 * @param {string} data_key 
 * @returns success status code
 */
exports.removeItem = async (auth_key, data_key) => { 

  // build DynamoDb query
  const filterParams = {
    TableName,
    Key: { auth_key, data_key }
  };  

  // remove item from DB
  await dynamoDb.delete(filterParams).promise();  
};

 