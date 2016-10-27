const fetch = require('../src')

const baseUrl = 'http://localhost:8000/cats'

const reqUpdate = {
  body: { name: 'Updated cat' },
}

const reqPost = {
  body: { name: 'New cat' },
}

// GET
fetch.get(baseUrl).then(resp =>
  console.log('GET\t>>>', resp)
).catch(fetch.error)

// POST
fetch.post(`${baseUrl}/new/`, reqPost).then(resp =>
  console.log('POST\t>>>', resp)
).catch(fetch.error)

// PUT
fetch.put(`${baseUrl}/1`, reqUpdate).then(resp =>
  console.log('PUT\t>>>', resp)
).catch(fetch.error)

// PATCH
fetch.patch(`${baseUrl}/2`, reqUpdate).then(resp =>
  console.log('PATCH\t>>>', resp)
).catch(fetch.error)

// DELETE
fetch.delete(`${baseUrl}/2`).then(resp =>
  console.log('DELETE\t>>>', resp)
).catch(fetch.error)
