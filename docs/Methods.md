# Methods available

## **get(url, config)**
### Params
- **url**
  - Type: `string`
  - *Required*

- **config**
  - Type: `object`


```js
fitch.get(apiUrl, config)
  .then(response => console.log(response))
```

**Note:** GET method doesn't allow `body` inside config object.

## **post(url, config)**
### Params
- **url**
  - Type: `string`
  - *Required*

- **config**
  - Type: `object`
  - *Required*

```js
const req = { body: { name: 'Happy cat' } }

fitch.post(apiUrl, req)
  .then(response => console.log(response))
```

## **put(url, config)**
### Params
- **url**
  - Type: `string`
  - *Required*

- **config**
  - Type: `object`
  - *Required*

```js
const req = { body: { name: 'Happy cat' } }

fitch.put(apiUrl, req)
  .then(response => console.log(response))
```

## **patch(url, config)**
### Params
- **url**
  - Type: `string`
  - *Required*

- **config**
  - Type: `object`
  - *Required*

```js
const req = { body: { name: 'Happy cat' } }

fitch.patch(apiUrl, req)
  .then(response => console.log(response))
```

## **del(url, config)**
### Params
- **url**
  - Type: `string`
  - *Required*

- **config**
  - Type: `object`

```js
fitch.del(apiUrl)
  .then(response => console.log(response))
```

# Concurrency

## **all(iterable)**
### Params
- **iterable**
  - Type: `array`
  - *Required*

`all()` is a helper function for dealing with concurrent requests.

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

# Handling errors
If Fetch throws an error, we can handle this using `catch()`:

```js
fitch.get(apiUrl)
  .then(response => console.log(response))
  .catch(err => console.error(err))
```

### **Next: [Learn about custom configuration](https://github.com/raphaelpor/fitch.js/blob/master/docs/Config.md).**
