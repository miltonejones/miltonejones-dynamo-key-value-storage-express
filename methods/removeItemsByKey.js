const { asyncTry, dynamoDb, TableName } = require('../sys');
const { getItemsByKey } = require('./getItemsByKey');


/**
 * removes items from the remote storage table by auth_key
 * @param {string} auth_key 
 * @returns success status code
 */
 exports.removeItemsByKey = async (auth_key) => { 

  // scan the table for matching items
  const itemsByKey = await getItemsByKey(auth_key);

  // extract data_keys from collection
  const data_keys = Object.keys(itemsByKey);

  // build DynamoDb queries
  const filterParams = data_keys.map(data_key => ({
    TableName,

    // data_keys of all the items for this auth_key
    Key: { auth_key, data_key }
  }));  

  // remove items from DB
  await Promise.all(
    filterParams

    // remove each item in series
    .map(filterParam => dynamoDb.delete(filterParam).promise())
  );  
};

 