function check(resp, dataType = 'json') {
  const typeList = ['arrayBuffer', 'blob', 'formData', 'json', 'text'];
  const included = typeList.indexOf(dataType) !== -1;

  if (resp.ok && included) {
    return resp[dataType]()
      .then(data => ({
        data,
        status: resp.status,
        statusText: resp.statusText,
        headers: resp.headers,
      }));
  }

  const errorMerssage = !included ? 'Invalid data type' : `${resp.status} - ${resp.statusText}.`;

  throw new Error(errorMerssage);
}

export default check;
