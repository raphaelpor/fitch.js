module.exports = {
  create(
    method,
    {
      body = '',
      cache = 'default',
      headers = { "Content-Type": "application/json" },
      mode = 'cors'
    } = {}
  ) {
    return  {
      method,
      body: JSON.stringify(body),
      cache,
      headers,
      mode
    }
  },
}
