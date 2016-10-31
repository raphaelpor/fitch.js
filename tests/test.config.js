import test from 'ava'
import config, { create } from '../src/config'

test('module: config', t =>
  t.is(typeof config, 'object', 'is defined and is a object')
)

test('method: create', t => {
  const conf = {
    body: { name: 'test' },
    cache: 'no-store',
    headers: { 'Content-Type': 'plain/text' },
    headersDefault: 'application/json',
    mode: 'no-cors',
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
})
