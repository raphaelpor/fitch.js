const fetch = require('../src')

const reqUpdate = {
  body: { name: 'Updated cat' },
}

const reqPost = {
  body: { name: 'New cat' },
}

// GET
fetch.get('cats').then(resp =>
  console.log('GET\t>>>', resp)
).catch(fetch.error)

// POST
fetch.post('cats/new/', reqPost).then(resp =>
  console.log('POST\t>>>', resp)
).catch(fetch.error)

// PUT
fetch.put('cats/1', reqUpdate).then(resp =>
  console.log('PUT\t>>>', resp)
).catch(fetch.error)

// PATCH
fetch.patch('cats/2', reqUpdate).then(resp =>
  console.log('PATCH\t>>>', resp)
).catch(fetch.error)

// DELETE
fetch.delete('cats/2').then(resp =>
  console.log('DELETE\t>>>', resp)
).catch(fetch.error)
