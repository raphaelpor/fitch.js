const fitch = require('../src');

const baseUrl = 'http://localhost:8000/cats';

const reqUpdate = {
  body: { name: 'Updated cat' },
};

const reqPost = {
  body: { name: 'New cat' },
};

// GET
fitch.get(baseUrl).then(resp =>
  console.log('GET\t>>>', resp)
).catch(fitch.error);

// POST
fitch.post(`${baseUrl}/new/`, reqPost).then(resp =>
  console.log('POST\t>>>', resp)
).catch(fitch.error);

// PUT
fitch.put(`${baseUrl}/1`, reqUpdate).then(resp =>
  console.log('PUT\t>>>', resp)
).catch(fitch.error);

// PATCH
fitch.patch(`${baseUrl}/2`, reqUpdate).then(resp =>
  console.log('PATCH\t>>>', resp)
).catch(fitch.error);

// DELETE
fitch.delete(`${baseUrl}/2`).then(resp =>
  console.log('DELETE\t>>>', resp)
).catch(fitch.error);
