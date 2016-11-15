import test from 'ava'
import request from '../src/request'

test('method: request', t => {
  t.is(typeof request, 'function', 'is defined and is a function')
})
