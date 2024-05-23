const TestService = require('./testService');
const fastifyPlugin = require('fastify-plugin');
async function servicePlugin(fastify, options) {
    fastify.decorate('testService', new TestService());
}

module.exports = fastifyPlugin(servicePlugin);