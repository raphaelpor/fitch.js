export default {
  create(method, {
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

    const result = {
      body: data,
      cache,
      credentials,
      headers,
      mode,
      redirect,
      referrer,
    };

    if (integrity) {
      result.integrity = integrity;
    }

    if (referrerPolicy) {
      result.referrerPolicy = referrerPolicy;
    }

    return result;
  },
};
