import test from 'ava'
import { get, put, post, patch, del } from '../src'

const baseUrl = 'http://localhost:8000/cats'

const reqUpdate = {
  body: { name: 'Updated cat' },
}

const reqPost = {
  body: { name: 'New cat' },
}

test('method: get', t =>
  get(baseUrl)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
    .catch(data => t.pass())
)

test('method: post', t =>
  post(`${baseUrl}/new/`, reqPost)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
    .catch(data => t.pass())
)

test('method: put', t =>
  put(`${baseUrl}/1`, reqUpdate)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
    .catch(data => t.pass())
)

test('method: patch', t =>
  patch(`${baseUrl}/1`, reqUpdate)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
    .catch(data => t.pass())
)

test('method: del', t =>
  del(`${baseUrl}/1`)
    .then(data => t.is(typeof data, 'object', 'data is a object'))
    .catch(data => t.pass())
)
