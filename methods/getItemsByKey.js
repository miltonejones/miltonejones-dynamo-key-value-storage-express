const { 
    asyncTry, 
    dynamoDb, 
    arrayToObject, 
    TableName 
  } = require('../sys');
    
  /**
   * reads all items for a given auth_key from the remote storage table
   * @param {string} auth_key  
   * @returns list of items
   */
  exports.getItemsByKey = async (auth_key) => { 
  
    // build DynamoDb query
    const filterParams = {
      TableName,
  
      // query filter
      FilterExpression: "#pk = :auth_key_val",
  
      // alias db column name 
      ExpressionAttributeNames: { 
        "#pk": "auth_key",
      },
  
      // query filter value 
      ExpressionAttributeValues: {  
        ":auth_key_val": auth_key 
      }
    };  
  
    // look up item in DB
    const { Items } =  await dynamoDb.scan(filterParams).promise();  
  
    // if found, return the items as an object
    return arrayToObject(Items);
  };
  