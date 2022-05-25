
const { asyncTry, dynamoDb, TableName } = require('../sys');

/**
 * reads an item from the remote storage table
 * @param {string} auth_key 
 * @param {string} data_key 
 * @returns value of the item with the selected keys
 */
exports.getItem = async (auth_key, data_key) => { 

  // build DynamoDb query
  const filterParams = {
    TableName,

    // query filter
    FilterExpression: "#sk = :data_key_val AND #pk = :auth_key_val",

    // alias db column names
    ExpressionAttributeNames: {
      "#sk": "data_key",
      "#pk": "auth_key",
    },

    // query filter values
    ExpressionAttributeValues: { 
      ":data_key_val": data_key ,
      ":auth_key_val": auth_key 
    }
  };  

  // look up item in DB
  const { Items } =  await dynamoDb.scan(filterParams).promise(); 
  
  // empty message if no item found
  if (!(Items && Items.length)) {
    return '';
  }

  // if found, return the item value
  return Items[0].data_value; 
};
