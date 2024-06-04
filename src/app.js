const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');
const repopsitoryPlugin = require('./repositories/repositoryPlugin');
const todoRoutes = require('./routes/api/v1/submissionRoutes');

/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */
async function app(fastify, options) {
    fastify.register(require('@fastify/cors'));
    fastify.register(repopsitoryPlugin);
    fastify.register(servicePlugin);

    fastify.register(todoRoutes, {prefix: '/todos'});

    // register test routes
    fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});


}

module.exports = fastifyPlugin(app);