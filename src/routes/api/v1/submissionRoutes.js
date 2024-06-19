const { createSubmission } = require("../../../controllers/submissionController");
const addSubmissionSchema = require("../../../dtos/addSubmissionDto");

async function submissionRoutes(fastify, options) {
    fastify.post('/', {
        schema: {
            body: addSubmissionSchema
        },
        handler: createSubmission,
    });
}

module.exports = submissionRoutes;