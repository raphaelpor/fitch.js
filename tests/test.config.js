import test from 'ava'
import config, { create } from '../src/config'

test('module: config', t =>
  t.is(typeof config, 'object', 'is defined and is a object')
)

test('method: create', t =>
  t.is(typeof create, 'function', 'is defined and is a function')
)
