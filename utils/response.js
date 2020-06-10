/**
 * @file Handles API responses
 */

/**
 * Generate an API Response
 * @param {Object} content The body of the API response
 * @param {APIError} error Optional APIError object 
 */
module.exports.generate = function(content, error) {
    var APIResponse = {
        error: JSON.stringify(error),
        content: content
    }
    return APIResponse;
}

module.exports.APIError = function(message) {
    this.message = message;
}