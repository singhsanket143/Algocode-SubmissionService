const SubmissionCreationError = require('../errors/submissionCreationError');
const SubmissionProducer = require('../producers/submissionQueueProducer');
class SubmissionService {
    constructor(submissionRepository) {
        // inject here
        this.submissionRepository = submissionRepository;
    }

    async pingCheck() {
        return 'pong'
    }

    async addSubmission(submissionPayload) {
        const submission = await this.submissionRepository.createSubmission(submissionPayload);
        if(!submission) {
            // TODO: Add error handling here
            throw new SubmissionCreationError('Failed to create a submission in the repository');
        }
        console.log(submission);
        const response = await SubmissionProducer(submission);
        return {queueResponse: response, submission};
    }
}

module.exports = SubmissionService