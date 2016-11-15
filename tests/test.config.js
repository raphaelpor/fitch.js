import test from 'ava'
import config from '../src/config'

const create = config.create

test('module: config', t =>
  t.is(typeof config, 'object', 'is defined and is a object')
)

test('method: create', t => {
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

  t.is(typeof create, 'function', 'is defined and is a function')

  t.is(create().body, undefined, 'body = undefined')
  t.is(create('', conf).body, JSON.stringify(conf.body), 'body = "test"')

  t.is(create().cache, 'default', 'cache = "default"')
  t.is(create('', conf).cache, conf.cache, 'cache = "no-store"')

  t.is(create().headers['Content-Type'], conf.headersDefault, 'headers = "application/json"')
  t.is(create('', conf).headers, conf.headers, 'headers = "no-cors"')

  t.is(create().mode, 'cors', 'mode = "cors"')
  t.is(create('', conf).mode, conf.mode, 'mode = "no-cors"')

  t.is(create().redirect, undefined, 'redirect = undefined')
  t.is(create('', conf).redirect, conf.redirect, 'redirect = "follow"')

  t.is(create().credentials, undefined, 'credentials = undefined')
  t.is(create('', conf).credentials, conf.credentials, 'credentials = "omit"')

  t.is(create().integrity, undefined, 'integrity = undefined')
  t.is(create('', conf).integrity, conf.integrity, 'integrity = "sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE="')

  t.is(create().referrer, undefined, 'referrer = undefined')
  t.is(create('', conf).referrer, conf.referrer, 'referrer = "client"')

  t.is(create().referrerPolicy, undefined, 'referrerPolicy = undefined')
  t.is(create('', conf).referrerPolicy, conf.referrerPolicy, 'referrerPolicy = "origin"')
})
