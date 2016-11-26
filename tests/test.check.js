import test from 'ava'
import check from '../src/utils/check'

const resp = {
  ok: true,
  data: { foo: 'bar' },
  status: 200,
  statusText: 'Ok',
  headers: { foo: 'bar' },
  json() {
    return Promise.resolve(this.data)
  },
  blob() {
    return Promise.resolve(this.data)
  },
  formData() {
    return Promise.resolve(this.data)
  },
  text() {
    return Promise.resolve(this.data)
  },
  arrayBuffer() {
    return Promise.resolve(this.data)
  },
}

test('method: check', t => {
  t.is(typeof check, 'function', 'is defined and is a function')
  t.is(typeof check(resp), 'object', 'validade the response and return a object')
  t.is(typeof check(resp), 'object', 'validade the response and return a object')
  t.is(typeof check(resp, 'blob'), 'object', 'validade the response and return a object')
  t.is(typeof check(resp, 'formData'), 'object', 'validade the response and return a object')
  t.is(typeof check(resp, 'text'), 'object', 'validade the response and return a object')
  t.is(typeof check(resp, 'arrayBuffer'), 'object', 'validade the response and return a object')

  return check(resp).then(response => {
    t.is(typeof response.data, 'object', 'return the data object')
    t.is(response.status, 200, 'return the status')
    t.is(response.statusText, 'Ok', 'return the statusText')
    t.is(typeof response.headers, 'object', 'return the headers object')
  })
})
