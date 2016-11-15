import test from 'ava'
import check from '../src/utils/check'

test('method: check', t => {
  const resp = {
    ok: true,
    json() {
      return 'json'
    },
    blob() {
      return 'blob'
    },
    formData() {
      return 'formData'
    },
    text() {
      return 'text'
    },
    arrayBuffer() {
      return 'arrayBuffer'
    },
    status: '404',
    statusText: 'Not found.',
  }

  t.is(typeof check, 'function', 'is defined and is a function')
  t.is(check(resp), 'json', 'validade the response and return "json"')
  t.is(check(resp, 'blob'), 'blob', 'validade the response and return "blob"')
  t.is(check(resp, 'formData'), 'formData', 'validade the response and return "formData"')
  t.is(check(resp, 'text'), 'text', 'validade the response and return "text"')
  t.is(check(resp, 'arrayBuffer'), 'arrayBuffer', 'validade the response and return "arrayBuffer"')
})
