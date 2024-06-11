const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class InternalServerError extends BaseError {
    constructor(details) {
        super('InternalServer', StatusCodes.INTERNAL_SERVER_ERROR, `Something went wrong internally, Please try again later!`, details);
    }
}

module.exports = InternalServerError;