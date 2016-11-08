# Configuration

Fitch.js allows you to use a custom configuration for your requests. You just need to pass a config object as second parameter of the Fitch.js methods.

## Objects available

**body**

Receives a json object, that is transformed to string by Fitch.js, before send the request.

**Note:** GET method doesn't allow `body` inside config object.

```js
const req = { body: { name: 'Happy cat' } }

fitch.post(apiUrl, req)
  .then(data => console.log(data))
```

**cache**

Same as in Fetch API. [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache).

**credentials**

Same as in Fetch API. [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**headers**

Same as in Fetch API. [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/headers).

**mode**

Same as in Fetch API. [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode).

**params**

You don't need to pass your URL parameters as string. Fitch.js allows you to pass the parameters inside a object:

```js
const config = {
  params: { // transform to '?test1=test-1&test2=test-2'
    test1: 'test-1',
    test2: 'test-2',
  },
}

fitch.get(apiUrl, config)
  .then(data => console.log(data))
```

**raw**

Returns the raw output of Fetch API, so you can work with headers and custom requests like files.

```js
fitch.get('image.jpg', { raw: true })
  .then((response) => {
    if(response.ok) {
      return response.blob()
    } else {
      console.log('Network response was not ok.');
    }
  })
  .then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob)
    myImage.src = objectURL
  })
  .catch(fitch.error)
```

**redirect**

Same as in Fetch API. [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).
