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

function logError(err) {
  console.log(err);
}

// all
fitch.all([fitch.get(baseUrl), fitch.get(baseUrl, { raw: true })])
  .then(([x, y]) => {
    console.log('x\t>>>', x);
    console.log('y\t>>>', y);
  });

// GET
fitch.get(baseUrl).then(resp =>
  console.log('GET\t>>>', resp)
).catch(logError);

// GET with params
fitch.get(baseUrl, reqGet).then(resp =>
  console.log('GET\t>>>', resp)
).catch(logError);

// GET raw output
fitch.get(baseUrl, { raw: true }).then(resp =>
  console.log('GET\t>>>', resp)
).catch(logError);

// POST
fitch.post(`${baseUrl}/new/`, reqPost).then(resp =>
  console.log('POST\t>>>', resp)
).catch(logError);

// PUT
fitch.put(`${baseUrl}/1`, reqUpdate).then(resp =>
  console.log('PUT\t>>>', resp)
).catch(logError);

// PATCH
fitch.patch(`${baseUrl}/2`, reqUpdate).then(resp =>
  console.log('PATCH\t>>>', resp)
).catch(logError);

// DELETE
fitch.del(`${baseUrl}/2`).then(resp =>
  console.log('DELETE\t>>>', resp)
).catch(logError);
