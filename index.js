const fetch = require('./fetchService')

// GET
fetch.get('cats').then(resp =>
  console.log('GET >>>', resp)
).catch(fetch.error)

// POST
fetch.post('cats/new/', { name: 'New cat' }).then(resp =>
  console.log('POST >>>', resp)
).catch(fetch.error)

// PUT
fetch.put('cats/1', { name: 'Updated cat' }).then(resp =>
  console.log('PUT >>>', resp)
).catch(fetch.error)

// DELETE
fetch.delete('cats/2').then(resp =>
  console.log('DELETE >>>', resp)
).catch(fetch.error)
