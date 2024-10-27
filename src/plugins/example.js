const fp = require('fastify-plugin');

module.exports = fp((fastify, opts, done) => {
  fastify.decorate('example', 'foobar');
  done();
});
