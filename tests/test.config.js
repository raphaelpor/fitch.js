import test from 'ava'
import createConfig from '../src/config'

test('method: createConfig', t => {
  const conf = {
    body: { name: 'test' },
    cache: 'no-store',
    credentials: 'omit',
    headers: { 'Content-Type': 'plain/text' },
    integrity: 'sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=',
    headersDefault: 'application/json',
    mode: 'no-cors',
    redirect: 'follow',
    referrer: 'client',
    referrerPolicy: 'origin',
  }

  t.is(typeof createConfig, 'function', 'is defined and is a function')

  t.is(createConfig().body, undefined, 'body = undefined')
  t.is(createConfig('', conf).body, JSON.stringify(conf.body), 'body = "test"')

  t.is(createConfig().cache, 'default', 'cache = "default"')
  t.is(createConfig('', conf).cache, conf.cache, 'cache = "no-store"')

  t.is(createConfig().headers['Content-Type'], conf.headersDefault, 'headers = "application/json"')
  t.is(createConfig('', conf).headers, conf.headers, 'headers = "no-cors"')

  t.is(createConfig().mode, 'cors', 'mode = "cors"')
  t.is(createConfig('', conf).mode, conf.mode, 'mode = "no-cors"')

  t.is(createConfig().redirect, undefined, 'redirect = undefined')
  t.is(createConfig('', conf).redirect, conf.redirect, 'redirect = "follow"')

  t.is(createConfig().credentials, undefined, 'credentials = undefined')
  t.is(createConfig('', conf).credentials, conf.credentials, 'credentials = "omit"')

  t.is(createConfig().integrity, undefined, 'integrity = undefined')
  t.is(createConfig('', conf).integrity, conf.integrity, 'integrity = "sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE="')

  t.is(createConfig().referrer, undefined, 'referrer = undefined')
  t.is(createConfig('', conf).referrer, conf.referrer, 'referrer = "client"')

  t.is(createConfig().referrerPolicy, undefined, 'referrerPolicy = undefined')
  t.is(createConfig('', conf).referrerPolicy, conf.referrerPolicy, 'referrerPolicy = "origin"')
})
