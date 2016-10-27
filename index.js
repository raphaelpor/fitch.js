const fetch = require('./fetchService')

fetch.get('cats').then(resp =>
  console.log(resp)
).catch(fetch.error)
