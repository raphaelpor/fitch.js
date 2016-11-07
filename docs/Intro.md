# Get started

Fitch.js is a lightweight client HTTP that uses Fetch API and runs on Node.js and old browsers (with a polyfill).

## Install

You can install Fitch.js using NPM or Yarn:
```sh
npm i --save fitch
# or:
# yarn add fitch
```

Now just import Fitch.js and you are ready to make your first request.

```js
import fitch from 'fitch'
// or:
// const fitch = require('fitch')

const apiUrl = 'https://localhost:8080/'

fitch.get(apiUrl)
  .then(data => console.log(data))
```

Next: [Learn about the methods available](https://github.com/raphaelpor/fitch.js/blob/master/docs/Methods.md).
