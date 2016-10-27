const fetch = require('node-fetch');

const config = require('./config');

module.exports = {
  get(url, req) {
    return this.request('GET', url, req)
  },

  post(url, req) {
    return this.request('POST', url, req)
  },

  put(url, req) {
    return this.request('PUT', url, req)
  },

  patch(url, req) {
    return this.request('PATCH', url, req)
  },

  delete(url, req) {
    return this.request('DELETE', url, req)
  },

  request(method, url, req) {
    const params = config.create(method, req)
    return fetch(url, params).then(this.check)
  },

  check(resp) {
    if (resp.ok) {
      return resp.json()
    }
    throw `${resp.status} - ${resp.statusText}.`
  },

  error(err) {
    console.log('Error >', err);
  },
}
