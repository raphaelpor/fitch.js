import test from 'ava'
import params, { transform } from '../src/params'

test('module: params', t =>
  t.is(typeof params, 'object', 'is defined and is a object')
)

test('method: transform', t => {
  const obj = {
    test1: 'test-1',
    test2: 'test-2',
  }

  t.is(typeof transform, 'function', 'is defined and is a function')
  t.is(transform(), '', 'return nothing')
  t.is(transform(obj), '?test1=test-1&test2=test-2', 'return enconded url')
})
