export default {
  transform(source) {
    const list = [];

    for (const key in source) {
      if ({}.hasOwnProperty.call(source, key)) {
        list.push(`${encodeURIComponent(key)}=${encodeURIComponent(source[key])}`);
      }
    }

    return list.length ? `?${list.join('&')}` : '';
  },
};
