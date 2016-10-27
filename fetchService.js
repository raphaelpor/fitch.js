const fetch = require('node-fetch');

module.exports = {
  API_URL: 'http://localhost:8000/',

  get(url) {
    return this.request('GET', url)
  },

  post(url, body) {
    return this.request('POST', url, body)
  },

  put(url, body) {
    return this.request('PUT', url, body)
  },

  patch(url, body) {
    return this.request('PATCH', url, body)
  },

  delete(url) {
    return this.request('DELETE', url)
  },

  request(method, url, body) {
    const config = this.config(method, JSON.stringify(body))
    return fetch(this.API_URL + url, config).then(this.check)
  },

  config(method, body) {
    const obj = {
      method,
      body,
      headers: { "Content-Type": "application/json" }
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
