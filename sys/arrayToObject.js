/**
 * creates function to decorate an object with dynamoItem key/value pairs
 * @param {object} source - source object
 * @returns - function to decorate source object 
 */
const assignObject = (source) => 
/**
 * adds a dynamoItem key/value pair to an object as a property
 * @param {object} item - dynamoItem key/value pair {data_key, data_value}
 * @returns - object decorated with new property
 */
(item) => Object.assign(source, { [item.data_key]: item.data_value }); 

/**
 * flattens an array of objects into a single object
 * @param {array} array - array of objects 
 * @returns single object
 */
exports.arrayToObject = (array) =>
  ((object) => {
  array.map(assignObject(object));
  return object;
})({});