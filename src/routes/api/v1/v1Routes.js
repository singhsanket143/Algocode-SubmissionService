async function v1Plugin(fastify, options) {
    fastify.register(require('./test/testRoutes'), {prefix: '/test'});
}

module.exports = v1Plugin