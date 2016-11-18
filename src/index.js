import request from './utils/request';

function get(url, req) {
  return request('GET', url, req);
}

function post(url, req) {
  return request('POST', url, req);
}

function put(url, req) {
  return request('PUT', url, req);
}

function patch(url, req) {
  return request('PATCH', url, req);
}

function del(url, req) {
  return request('DELETE', url, req);
}

function error(err = '') {
  console.log('Error >', err);
}

function all(promises) {
  return Promise.all(promises);
}

const fitch = {
  all,
  del,
  error,
  get,
  patch,
  post,
  put,
};

export default fitch;

export {
  all,
  del,
  error,
  get,
  patch,
  post,
  put,
};
