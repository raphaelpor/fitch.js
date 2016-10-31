module.exports = {
  create(
    method,
    {
      body,
      cache = 'default',
      headers = { 'Content-Type': 'application/json' },
      mode = 'cors',
    } = {}
  ) {
    if (body) {
      body = JSON.stringify(body);
    }
    return {
      method,
      body,
      cache,
      headers,
      mode,
    };
  },
};
