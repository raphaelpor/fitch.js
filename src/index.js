import merge from 'lodash.merge';
import request from './utils/request';

function initialize(rqst) {
  function get(url, req) {
    return rqst('GET', url, req);
  }

  function post(url, req) {
    return rqst('POST', url, req);
  }

  function put(url, req) {
    return rqst('PUT', url, req);
  }

  function patch(url, req) {
    return rqst('PATCH', url, req);
  }

  function del(url, req) {
    return rqst('DELETE', url, req);
  }

  function all(promises) {
    return Promise.all(promises);
  }

  function init({
    config = {},
    interceptor = promise => promise,
  } = {}) {
    const customRqst = (method, url, req) => (
      request(method, url, merge({}, config, req))
        .then(interceptor)
    );

    return initialize(customRqst);
  }

  return {
    all,
    del,
    get,
    init,
    patch,
    post,
    put,
  };
}

const fitch = initialize(request);

export default fitch;

export const {
  all,
  del,
  get,
  init,
  patch,
  post,
  put,
} = fitch;
