/**
 * Handles api responses, send all responses through this
 */

/**
 * Handles sending responses from API
 * @param {Object} res The response object to use to send the response
 * @param {Object} content The body of the API response
 * @param {Object} err The ResponseStatus to send (Generally, use SUCCESS/WARNING/ERROR enum)
 */
module.exports.generate = function(content, error) {
    var APIResponse = {
        error: error,
        content: content
    }
    return APIResponse;
}

module.exports.APIError = function(message) {
    this.message = message;
}