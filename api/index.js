const Hapi = require('hapi'); // eslint-disable-line

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000,
});

const path = '/cats';

server.route({
  method: 'GET',
  path,
  handler(request, reply) {
    const cats = [
      { name: 'Grumpy cat' },
      { name: 'Happy cat' },
    ];

    return reply(cats);
  },
});

server.route({
  method: 'POST',
  path: `${path}/new/`,
  handler(request, reply) {
    return reply(request.payload);
  },
});

server.route({
  method: 'PUT',
  path: `${path}/{id}`,
  handler(request, reply) {
    return reply(request.payload);
  },
});

server.route({
  method: 'PATCH',
  path: `${path}/{id}`,
  handler(request, reply) {
    return reply(request.payload);
  },
});

server.route({
  method: 'DELETE',
  path: `${path}/{id}`,
  handler(request, reply) {
    return reply();
  },
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
