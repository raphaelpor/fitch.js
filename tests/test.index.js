import test from 'ava'
import fitch from '../src'

const baseUrl = 'http://localhost:8000/cats'

const reqUpdate = {
  body: { name: 'Updated cat' },
}

const reqPost = {
  body: { name: 'New cat' },
}

fitch.request = () => Promise.resolve({ body: 'test' });

test('method: get', t =>
  fitch.get(baseUrl)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
)

test('method: post', t =>
  fitch.post(`${baseUrl}/new/`, reqPost)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
)

test('method: put', t =>
  fitch.put(`${baseUrl}/1`, reqUpdate)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
)

test('method: patch', t =>
  fitch.patch(`${baseUrl}/1`, reqUpdate)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
)

test('method: delete', t =>
  fitch.delete(`${baseUrl}/1`)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
)

test('method: request', t => {
  t.is(typeof fitch.request, 'function', 'is defined and is a function')
})

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

  t.is(typeof fitch.check, 'function', 'is defined and is a function')
  t.is(fitch.check(resp), 'json', 'validade the response and return "json"')
  t.is(fitch.check(resp, 'blob'), 'blob', 'validade the response and return "blob"')
  t.is(fitch.check(resp, 'formData'), 'formData', 'validade the response and return "formData"')
  t.is(fitch.check(resp, 'text'), 'text', 'validade the response and return "text"')
  t.is(fitch.check(resp, 'arrayBuffer'), 'arrayBuffer', 'validade the response and return "arrayBuffer"')
})

test('method: error', t => {
  const err = 'test message'

  t.is(typeof fitch.error, 'function', 'is defined and is a function')
  t.is(fitch.error(err), undefined, 'log the error on console')
})
