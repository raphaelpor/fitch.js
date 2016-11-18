const fitch = require('../dist');

const baseUrl = 'http://localhost:8000/cats';

const reqGet = {
  params: {
    test1: 'test-1',
    test2: 'test-2',
  },
};

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

// GET with params
fitch.get(baseUrl, reqGet).then(resp =>
  console.log('GET\t>>>', resp)
).catch(fitch.error);

// GET raw output
fitch.get(baseUrl, { raw: true }).then(resp =>
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
fitch.del(`${baseUrl}/2`).then(resp =>
  console.log('DELETE\t>>>', resp)
).catch(fitch.error);
