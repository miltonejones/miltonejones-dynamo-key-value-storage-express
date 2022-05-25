const { asyncTry, dynamoDb, TableName } = require('../sys');

/**
 * adds an item to the remote storage table
 * @param {object} Item - item to add to the table  
 */
exports.setItem = async (Item) => {

  // insert params
  const putParams = { TableName, Item };

  // add item to DB
  await dynamoDb.put(putParams).promise(); 
};


 