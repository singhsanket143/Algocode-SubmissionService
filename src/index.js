const fastify = require('fastify')({ logger: true }); // calling the fastify constructor
const app = require('./app');
const connectToDB = require('./config/dbConfig');
const serverConfig = require('./config/serverConfig');
const errorHandler = require('./utils/errorHandler');

fastify.register(app);
fastify.setErrorHandler(errorHandler); // error handler will be executed at the end

fastify.listen({ port: serverConfig.PORT }, async (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1)
    }
    await connectToDB();
    console.log(`Server up at port ${serverConfig.PORT}`);
});