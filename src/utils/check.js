function check(resp, dataType = 'json') {
  const typeList = ['arrayBuffer', 'blob', 'formData', 'json', 'text'];
  const included = typeList.indexOf(dataType);

  if (resp.ok && included !== -1) {
    return resp[dataType]();
  }

  throw new Error(`${resp.status} - ${resp.statusText}.`);
}

export default check;
