module.exports = {
  create(method, {
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
}
