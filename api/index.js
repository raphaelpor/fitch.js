'use strict';

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

const path = '/cats'

server.route({
  method: 'GET',
  path: path,
  handler: function(request, reply) {
    const cats = [
      { name: 'Grumpy cat' },
      { name: 'Happy cat' },
    ]

    return reply(cats)
  }
})

server.route({
  method: 'POST',
  path: `${path}/new/`,
  handler: function(request, reply) {
    return reply(request.payload)
  }
})

server.route({
  method: 'PUT',
  path: `${path}/{id}`,
  handler: function(request, reply) {
    return reply(request.payload)
  }
})

// Start the server
server.start(err => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
