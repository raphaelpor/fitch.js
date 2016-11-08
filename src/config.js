module.exports = {
  create(method,
    {
      body,
      cache = 'default',
      credentials,
      headers = { 'Content-Type': 'application/json' },
      mode = 'cors',
      redirect,
    } = {}) {
    let data;
    if (body) {
      data = JSON.stringify(body);
    }
    return {
      method,
      body: data,
      cache,
      credentials,
      headers,
      mode,
      redirect,
    };
  },
};
