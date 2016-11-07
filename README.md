![Fitch.js](https://github.com/raphaelpor/fitch.js/raw/master/assets/fitch-mini.png)
# Fitch.js
A lightweight Promise based HTTP client, using Fetch API.

[![Build Status](https://travis-ci.org/raphaelpor/fitch.js.svg?branch=master)](https://travis-ci.org/raphaelpor/fitch.js)
[![license](https://img.shields.io/npm/l/fitch.svg)](https://github.com/raphaelpor/fitch.js/blob/master/LICENSE.md)

* [Documentation](https://github.com/raphaelpor/fitch.js/blob/master/docs/Intro.md)
* [License](https://github.com/raphaelpor/fitch.js/blob/master/LICENSE.md)

## Get started
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

**UMD:**

```html
<script src="node_modules/fitch/src/index.js"></script>
```

### Make your first request:
```js
fitch.get(apiUrl)
  .then(data => console.log(data))
```

## Methods available:
### get
```js
fitch.get(apiUrl)
  .then(data => console.log(data))
```

### post
```js
const req = {body: {name: 'Happy cat'}}

fitch.post(apiUrl, req)
  .then(data => console.log(data))
```

### put
```js
const req = {body: {name: 'Happy cat'}}

fitch.put(apiUrl, req)
  .then(data => console.log(data))
```

### patch
```js
const req = {body: {name: 'Happy cat'}}

fitch.patch(apiUrl, req)
  .then(data => console.log(data))
```

### delete
```js
fitch.delete(apiUrl)
  .then(data => console.log(data))
```

## Use with custom configuration
```js
const config = {
  cache = 'no-store',
  headers = { 'Content-Type': 'application/json' },
  mode = 'no-cors',
  raw = true, // return the raw output of fetch()
  params: { // transform to '?test1=test-1&test2=test-2'
    test1: 'test-1',
    test2: 'test-2',
  },
}

fitch.get(apiUrl, config)
  .then(data => console.log(data))
```
See more about fetch configuration at: [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API).

## Browser Support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="32px" height="32px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="32px" height="32px" />](http://godban.github.io/browsers-support-badges/)| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="32px" height="32px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="32px" height="32px" />](http://godban.github.io/browsers-support-badges/) |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| Every versions| Every versions| 6.1+|

Note: This assumes that you’re using a transpiler like Babel.

Note: modern browsers such as Chrome, Firefox, and Microsoft Edge contain native implementations of window.fetch, so the polyfill doesn't have any affect on those browsers. See more at [window.fetch polyfill](https://github.com/github/fetch).

## Contributig
First yout need to fork this repository. Then:
```sh
npm i # install local dependencies
npm start # run local server
npm run watch:test # watch files inside src/ and tests/
npm run examples # run examples
```
Note: Your code must be tested and pass in linter check.
You can verify your code with ESLint, using `npm run lint`.
