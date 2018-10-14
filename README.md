![Fitch.js](https://github.com/raphaelpor/fitch.js/raw/master/assets/fitch-mini.jpg)

# Fitch.js
A lightweight Promise based HTTP client, using Fetch API.

[![npm version](https://badge.fury.io/js/fitch.svg)](https://www.npmjs.com/package/fitch)
[![Build Status](https://travis-ci.org/raphaelpor/fitch.js.svg?branch=master)](https://travis-ci.org/raphaelpor/fitch.js)
[![Documentation Status](https://img.shields.io/badge/docs-latest-brightgreen.svg?style=flat)](https://github.com/raphaelpor/fitch.js/blob/master/docs/Intro.md)
[![license](https://img.shields.io/npm/l/fitch.svg)](https://github.com/raphaelpor/fitch.js/blob/master/LICENSE.md)

[![Gitter](https://badges.gitter.im/join_chat.svg)](https://gitter.im/fitch-js/Lobby)

## Features

- Uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- Works on both old and new browsers and on Node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Transform request and response data
- Automatic transforms for JSON data

## Get started

* [Documentation](https://github.com/raphaelpor/fitch.js/wiki)
  * [Get started](https://github.com/raphaelpor/fitch.js/wiki)
  * [Methods available](https://github.com/raphaelpor/fitch.js/wiki/Methods-available)
  * [Configuration](https://github.com/raphaelpor/fitch.js/wiki/Configuration)
  * [Default Configuration and Request Interceptor](https://github.com/raphaelpor/fitch.js/wiki/Default-Configuration-and-Request-Interceptor)

### Install
```sh
npm i --save fitch
```

## Use

**With ES2015 or TypeScript:**

```js
import fitch from 'fitch'
```

**CommonJS:**

```js
const fitch = require('fitch')
```

**CDN:**

unpkg
```html
<script src="https://unpkg.com/fitch/dist/index.umd.min.js"></script>
```

jsDelivr
```html
<script src="https://cdn.jsdelivr.net/g/fitch.js"></script>
```

### Make your first request:
```js
fitch.get(apiUrl)
  .then(response => console.log(response))

/* Response:
{
  data: { foo: 'bar' },
  status: 200,
  statusText: 'Ok',
  headers: { Content-Type: application/json },
}
*/
```

## Methods available:
### get
```js
fitch.get(apiUrl)
  .then(response => console.log(response))
```

### post
```js
const req = {body: {name: 'Happy cat'}}

fitch.post(apiUrl, req)
  .then(response => console.log(response))
```

### put
```js
const req = {body: {name: 'Happy cat'}}

fitch.put(apiUrl, req)
  .then(response => console.log(response))
```

### patch
```js
const req = {body: {name: 'Happy cat'}}

fitch.patch(apiUrl, req)
  .then(response => console.log(response))
```

### del
```js
fitch.del(apiUrl)
  .then(response => console.log(response))
```

## Use with custom configuration
```js
const config = {
  cache: 'no-store',
  headers: { 'Content-Type': 'application/json' },
  mode: 'no-cors',
  params: { // transform to '?test1=test-1&test2=test-2'
    test1: 'test-1',
    test2: 'test-2',
  },
  raw: true, // return the raw output of fetch()
  redirect: 'follow',
}

fitch.get(apiUrl, config)
  .then(response => console.log(response))
```
See more about fetch configuration at: [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API).

## Concurrency

### all

Helper function for dealing with concurrent requests.

```js
const reqDogs = fitch.get('/dogs')
const reqCats = fitch.get('/cats')

function doSomething([ responseDogs, responseCats ]) {
  console.log('Dogs\t>>>', responseDogs)
  console.log('Cats\t>>>', responseCats)
}

fitch.all([ reqDogs, reqCats ])
  .then(doSomething)
```

## Default Configuration and Request Interceptor

```js
const fetchWrapper = fitch.init({
  config: { raw: true },
  interceptor: response => response.json(),
})

fetchWrapper.get(baseUrl).then(data =>
  console.log('GET with interceptor\t>>>', data)
)
```

## Browser Support

* Chrome
* Firefox
* Edge
* Safari 6.1+
* Internet Explorer 10+

Note: modern browsers such as Chrome, Firefox, and Microsoft Edge contain native implementations of window.fetch, so the polyfill doesn't have any affect on those browsers. See more at [window.fetch polyfill](https://github.com/github/fetch).

## Contributig

Read the [Code of conduct](https://github.com/raphaelpor/fitch.js/blob/master/code_of_conduct.md).

First yout need to fork this repository. Then:
```sh
yarn # install local dependencies
yarn start # run local server
yarn watch:test # watch files inside src/ and tests/
yarn build # run examples
yarn examples # run examples
```
Note: Your code must be tested and pass in linter check.
You can verify your code with ESLint, using `npm run lint`.

## Logo
Copyright © [Bárbara Schoen](https://www.linkedin.com/in/b%C3%A1rbara-schoen-692269b6)
