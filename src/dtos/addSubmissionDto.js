const addSubmissionSchema = {
    type: 'object',
    required: ['userId', 'problemId', 'code', 'language', 'status'],
    properties: {
        userId: { type: 'string' },
        problemId: { type: 'string' },
        code: { type: 'string' },
        language: { type: 'string' },
        status: { type: 'string' },
    },
    additionalProperties: false // disallows extra properties added in the dto
};

module.exports = addSubmissionSchema;