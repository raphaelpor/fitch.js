module.exports = {
  API_URL: 'https://api.github.com/users/',

  get(url) {
    return this.request('GET', url)
  },

  post(url, body) {
    return this.request('POST', url, body)
  },

  put(url) {
    return this.request('PUT', url)
  },

  delete(url) {
    return this.request('DELETE', url)
  },

  request(method, url, body) {
    const config = this.config(method, body)
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
    return resp.ok && resp.json()
  },

  error(err) {
    console.log(err);
  },
}
