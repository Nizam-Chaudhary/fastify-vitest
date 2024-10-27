const example = require('../plugins/example');

async function routes(app, opts) {
  app.get('/example', async (req, reply) => {
    reply.code(200).send({
      hello: app.example,
    });
  });

  app.get('/test', async (req, reply) => {
    reply.code(200).send({
      message: 'Hello, World!',
    });
  });
}

module.exports = routes;
