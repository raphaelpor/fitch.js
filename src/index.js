import 'fetch-everywhere';

import config from './config';
import params from './params';

export default {
  get(url, req) {
    return this.request('GET', url, req);
  },

  post(url, req) {
    return this.request('POST', url, req);
  },

  put(url, req) {
    return this.request('PUT', url, req);
  },

  patch(url, req) {
    return this.request('PATCH', url, req);
  },

  delete(url, req) {
    return this.request('DELETE', url, req);
  },

  request(method, url, req = {}) {
    let paramsEncoded = '';
    if (req.params) {
      paramsEncoded = params.transform(req.params);
    }

    const configObj = config.create(method, req);
    const call = fetch(url + paramsEncoded, configObj);

    return req.raw ? call : call.then(resp => this.check(resp, req.dataType));
  },

  check(resp, dataType = 'json') {
    const typeList = ['arrayBuffer', 'blob', 'formData', 'json', 'text'];
    const included = typeList.indexOf(dataType);

    if (resp.ok && included !== -1) {
      return resp[dataType]();
    }

    throw new Error(`${resp.status} - ${resp.statusText}.`);
  },

  error(err = '') {
    console.log('Error >', err);
  },
};
