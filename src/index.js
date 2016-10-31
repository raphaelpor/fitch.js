require('es6-promise').polyfill();
require('isomorphic-fetch');

const config = require('./config');
const params = require('./params');

module.exports = {
  get(url, req) {
    return this.request('GET', url, req);
  },

  post(url, req) {
    return this.request('POST', url, req);
  },

  put(url, req) {
    return this.request('PUT', url, req);
  },

  patch(url, req) {
    return this.request('PATCH', url, req);
  },

  delete(url, req) {
    return this.request('DELETE', url, req);
  },

  request(method, url, req = {}) {
    let paramsEncoded = '';
    if (req.params) {
      paramsEncoded = params.transform(req.params);
    }
    const configObj = config.create(method, req);
    const call = fetch(url + paramsEncoded, configObj);
    return req.raw ? call : call.then(this.check);
  },

  check(resp) {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error(`${resp.status} - ${resp.statusText}.`);
  },

  error(err) {
    if (err) {
      console.log('Error >', err);
    }
  },
};
