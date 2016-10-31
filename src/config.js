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
    let data;
    if (body) {
      data = JSON.stringify(body);
    }
    return {
      method,
      body: data,
      cache,
      headers,
      mode,
    };
  },
};
