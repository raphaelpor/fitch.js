const fetch = require('node-fetch');

module.exports = {
  API_URL: 'http://localhost:8000/',

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
    const config = this.config(method, req)
    const path = this.API_URL + url
    return fetch(path, config).then(this.check)
  },

  config(method, {
    body = '',
    cache = 'default',
    headers = { "Content-Type": "application/json" },
    mode = 'cors'
  } = {}) {
    const obj = {
      method,
      body: JSON.stringify(body),
      cache,
      headers,
      mode
    }
    return obj
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
