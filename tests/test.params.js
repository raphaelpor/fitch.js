import test from 'ava'
import params from '../src/params'

test('module: params', t =>
  t.is(typeof params, 'object', 'is defined and is a object')
)

test('method: transform', t => {
  const obj = {
    test1: 'test-1',
    test2: 'test-2',
  }

  t.is(typeof params.transform, 'function', 'is defined and is a function')
  t.is(params.transform(), '', 'return nothing')
  t.is(params.transform(obj), '?test1=test-1&test2=test-2', 'return enconded url')
})
