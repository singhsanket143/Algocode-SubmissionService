const SubmissionProducer = require('../producers/submissionQueueProducer');
class SubmissionService {
    constructor(submissionRepository) {
        // inject here
        this.submissionRepository = submissionRepository;
    }

    async pingCheck() {
        return 'pong'
    }

    async addSubmission(submission) {
        const submission = this.submissionRepository.createSubmission(submission);
        if(!submission) {
            // TODO: Add error handling here
            throw {messgae: "Not able to create submission"};
        }
        console.log(submission);
        const response = await SubmissionProducer(submission);
        return {queueResponse: response, submission};
    }
}

module.exports = SubmissionService