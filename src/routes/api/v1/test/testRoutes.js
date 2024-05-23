const testController = require("../../../../controllers/testController");

async function testRoute(fastify, options) {
    fastify.get('/ping', testController.pingRequest)
}

module.exports = testRoute;