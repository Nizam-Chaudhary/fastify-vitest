const Fastify = require('fastify');
const routes = require('./routes/routes.js');
const example = require('./plugins/example');

const fastify = Fastify({
  logger: true,
});

async function startServer() {
  await fastify.listen({
    port: 3333,
  });
}

fastify.register(example);

fastify.register(routes);

startServer();

module.exports = fastify;
