import fetch from './fetch'

fetch.get('raphaelpor').then(resp =>
  console.log(resp.name)
).catch(fetch.error)
