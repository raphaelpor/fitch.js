'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path:'/cats',
  handler: function (request, reply) {
    const cats = [
      { name: 'Grumpy cat' },
      { name: 'Happy cat' },
    ];

    return reply(cats);
  }
});

server.route({
  method: 'POST',
  path:'/cats/new/',
  handler: function (request, reply) {
    return reply(request.payload);
  }
});

server.route({
  method: 'PUT',
  path:'/cats/{id}',
  handler: function (request, reply) {
    return reply(request.payload);
  }
});

// Start the server
server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
