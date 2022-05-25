const { 
  asyncTry, 
  dynamoDb, 
  arrayToObject, 
  TableName } = require('../sys');
const { getItems } = require('./getItems');


/**
 * removes all items from the remote storage table  
 */
exports.removeItems = async () => { 

  // scan the table for all items
  const items = await getItems();

  // extract data_keys from collection
  const data_keys = Object.keys(arrayToObject(items));

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

 