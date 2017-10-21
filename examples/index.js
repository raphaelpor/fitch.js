const fitch = require('../dist');

const log = (...args) => { console.log('\x1b[32m%s\x1b[0m', ...args); }

const logError = (err) => { console.log('\x1b[31m%s\x1b[31m', err); }

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

const fetchWrapper = fitch.init({
  config: { raw: true },
  interceptor: (response) => {
    log('interceptor\t>>>', response.ok);
    return response.json();
  },
});

// GET with interceptor
fetchWrapper.get(baseUrl).then(data =>
  log('GET with interceptor\t>>>', data)
).catch(logError);

// GET
fitch.get(baseUrl).then(resp =>
  log('GET\t>>>', resp.data)
).catch(logError);

// GET with params
fitch.get(baseUrl, reqGet).then(resp =>
  log('GET\t>>>', resp.data)
).catch(logError);

// GET raw output
fitch.get(baseUrl, { raw: true }).then(resp =>
  log('GET\t>>>', resp.status)
).catch(logError);

// POST
fitch.post(`${baseUrl}/new/`, reqPost).then(resp =>
  log('POST\t>>>', resp.data)
).catch(logError);

// PUT
fitch.put(`${baseUrl}/1`, reqUpdate).then(resp =>
  log('PUT\t>>>', resp.data)
).catch(logError);

// PATCH
fitch.patch(`${baseUrl}/2`, reqUpdate).then(resp =>
  log('PATCH\t>>>', resp.data)
).catch(logError);

// DELETE
fitch.del(`${baseUrl}/2`).then(resp =>
  log('DELETE\t>>>', resp.data)
).catch(logError);

// all
fitch.all([fitch.get(baseUrl), fitch.get(baseUrl, { raw: true })])
  .then(([x, y]) => {
    log('response 1\t>>>', x.data);
    log('response 2\t>>>', y.status);
  });
