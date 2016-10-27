const fetch = require('./fetchService')

fetch.get('raphaelpor').then(resp =>
  console.log(resp.name)
).catch(fetch.error)
