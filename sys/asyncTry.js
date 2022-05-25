
/**
 * Global error handling: handles any errors from an async function 
 * @param {function} fn - async function to be executed 
 * @param {number} status - response status code 
 * @returns http response object
 */
exports.asyncTry = async (fn, status = 200) => {
  // response body
  let body;

  // anything but perfection is an error
  let statusCode = 500;

  // execute function 
  try {

    // response body is the result of fn
    body = await fn();

    // set status code
    statusCode = status;

  } catch (error) {

    // return error message as response body
    body = error.message;

    // write full error to CloudWatch logs
    console.debug ( { error });
  }

  return { statusCode, body };
}