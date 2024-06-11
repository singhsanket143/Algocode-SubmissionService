const BaseError = require("../errors/base.error");
const { StatusCodes } = require('http-status-codes');

function errorHandler(error, request, reply) {
    if (error instanceof BaseError) {
        reply.status(error.statusCode).send({
            message: error.message,
            details: error.details,
            success: false,
        });
    } else {
        reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            message: error.message ? error.message : "",
            details: "Something went wrong Internally",
            success: false,
        });
    }
}

module.exports = errorHandler;