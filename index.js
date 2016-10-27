const fetch = require('./fetchService')

fetch.get('cats').then(resp =>
  console.log('GET >>>', resp)
).catch(fetch.error)

fetch.post('cats/new/', { name: 'New cat' }).then(resp =>
  console.log('POST >>>', resp)
).catch(fetch.error)

fetch.put('cats/1', { name: 'Updated cat' }).then(resp =>
  console.log('PUT >>>', resp)
).catch(fetch.error)
