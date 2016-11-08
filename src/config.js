module.exports = {
  create(method,
    {
      body,
      cache = 'default',
      credentials,
      headers = { 'Content-Type': 'application/json' },
      integrity,
      mode = 'cors',
      redirect,
      referrer,
      referrerPolicy,
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
      integrity,
      mode,
      redirect,
      referrer,
      referrerPolicy,
    };
  },
};
