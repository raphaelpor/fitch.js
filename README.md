![Fitch.js](https://github.com/raphaelpor/fitch.js/raw/master/assets/fitch-mini.png)
# Fitch.js
A lightweight Promise based HTTP client, using Fetch API.

## Get started
### Install
```sh
npm i --save fitch
```

## Use

** With ES2015 or TypeScript:**

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

fitch.get(apiUrl, req)
  .then(data => console.log(data))
```

### put
```js
const req = {body: {name: 'Happy cat'}}

fitch.get(apiUrl, req)
  .then(data => console.log(data))
```

### patch
```js
const req = {body: {name: 'Happy cat'}}

fitch.get(apiUrl, req)
  .then(data => console.log(data))
```

### delete
```js
fitch.get(apiUrl)
  .then(data => console.log(data))
```

## Use with custom configuration
```js
const config = {
  cache = 'no-store',
  headers = { 'Content-Type': 'application/json' },
  mode = 'no-cors',
}

fitch.get(apiUrl, config)
  .then(data => console.log(data))
```

## Contributig
First yout need to fork this repository. Then:
```sh
npm i # install local dependencies
npm start # run local server
npm run watch:test # watch files inside src/ and tests/
npm run examples # run examples
```
It is important that the code can be tested and pass in linter check.
You can verify your code with ESLint, using `npm run lint`.
