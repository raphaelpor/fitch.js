import 'fetch-everywhere';

import createConfig from './config';
import transformParams from './params';
import check from './check';

function request(method, url, req = {}) {
  let paramsEncoded = '';
  if (req.params) {
    paramsEncoded = transformParams(req.params);
  }

  const configObj = createConfig(method, req);
  const call = fetch(url + paramsEncoded, configObj);

  return req.raw ? call : call.then(resp => check(resp, req.dataType));
}

export default request;
