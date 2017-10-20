import test from 'ava'
import fitch, { get, put, post, patch, del, all, init, error } from '../src'

const baseUrl = 'http://localhost:8000/cats'

const reqUpdate = {
  body: { name: 'Updated cat' },
}

const reqPost = {
  body: { name: 'New cat' },
}

const initOpts = {
  config: { body: { friendName: 'Special Cat' } },
  interceptor: ({ data: { name, friendName } }) => (
    name === 'New cat' && friendName === 'Special Cat'
  )
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

test('method: all', t => {
  const prom1 = Promise.resolve('ok-1')
  const prom2 = Promise.resolve('ok-2')

  t.is(typeof all, 'function', 'all is a function')

  return all([ prom1, prom2 ])
    .then(([ result1, result2 ]) => {
      t.is(result1, 'ok-1', 'result1 is ok-1')
      t.is(result2, 'ok-2', 'result2 is ok-2')
    })
})

test('method: init', t => {
  t.not(fitch.init(), fitch)

  return init(initOpts)
    .post(`${baseUrl}/new/`, reqPost)
    .then(isExpectedReturn => t.true(isExpectedReturn,'config and interceptor applied to request'))
    .catch(data => t.pass())
})
