import test from 'ava'
import fitch from '../src'

const baseUrl = 'http://localhost:8000/cats'

const reqUpdate = {
  body: { name: 'Updated cat' },
}

const reqPost = {
  body: { name: 'New cat' },
}

test('method: get', t =>
  fitch.get(baseUrl).then(data => t.pass())
)

test('method: post', t =>
  fitch.post(`${baseUrl}/new/`, reqPost).then(data => t.pass())
)

test('method: put', t =>
  fitch.put(`${baseUrl}/1`, reqUpdate).then(data => t.pass())
)

test('method: patch', t =>
  fitch.patch(`${baseUrl}/1`, reqUpdate).then(data => t.pass())
)

test('method: delete', t =>
  fitch.delete(`${baseUrl}/1`).then(data => t.pass())
)
