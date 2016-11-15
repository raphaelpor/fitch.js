import test from 'ava'
import transformParams from '../src/params'

test('method: transform', t => {
  const obj = {
    test1: 'test-1',
    test2: 'test-2',
  }

  t.is(typeof transformParams, 'function', 'is defined and is a function')
  t.is(transformParams(), '', 'return nothing')
  t.is(transformParams(obj), '?test1=test-1&test2=test-2', 'return enconded url')
})
