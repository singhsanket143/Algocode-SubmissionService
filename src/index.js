const fastify = require('fastify')({ logger: true }); // calling the fastify constructor
const app = require('./app');
const PORT = 3000;

fastify.register(app);

fastify.listen({ port: PORT }, (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1)
    }
    console.log(`Server up at port ${PORT}`);
});