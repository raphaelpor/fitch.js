# Methods available:

**get(url, config)**

```js
fitch.get(apiUrl, config)
  .then(data => console.log(data))
```

**Note:** GET method doesn't allow `body` inside config object.

**post(url, config)**

```js
const req = { body: { name: 'Happy cat' } }

fitch.post(apiUrl, req)
  .then(data => console.log(data))
```

**put(url, config)**

```js
const req = { body: { name: 'Happy cat' } }

fitch.put(apiUrl, req)
  .then(data => console.log(data))
```

**patch(url, config)**

```js
const req = { body: { name: 'Happy cat' } }

fitch.patch(apiUrl, req)
  .then(data => console.log(data))
```

**del(url, config)**

```js
fitch.del(apiUrl)
  .then(data => console.log(data))
```

## Handling errors
If Fetch throws an error, we can handle this using `catch()`:

```js
fitch.get(apiUrl)
  .then(data => console.log(data))
  .catch(fitch.error) // log the error message on the console
```

**Note:** Fitch.js allows you to use a custom configuration for your requests. [You can learn about it here](https://github.com/raphaelpor/fitch.js/blob/master/docs/Config.md).
