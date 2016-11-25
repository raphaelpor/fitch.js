# Configuration

Fitch.js allows you to use a custom configuration for your requests. You just need to pass a config object as second parameter of the Fitch.js methods.

## Options

### **body** *(object)*

Receives a json object, that is transformed to string by Fitch.js, before send the request.

**Note:** GET method doesn't allow `body` inside config object.

```js
const req = { body: { name: 'Happy cat' } }

fitch.post(apiUrl, req)
  .then(data => console.log(data))
```

### **dataType** *(string)*

Returns a parsed data of the type you need.

Valid options are: `arrayBuffer`, `blob`, `formData`, `json` and `text`.

*Default:* `json`.

See more at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Body).

```js
// Image file
const config = { dataType: 'blob' }

fitch.get('image.jpg', config)
  .then((imageBlob) => {
    const objectURL = URL.createObjectURL(imageBlob)
    myImage.src = objectURL
  })

// Default: json.
fitch.get('file.json')
  .then(data => console.log(data))
```

### **params** *(object)*

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

### **raw** *(boolean)*

Returns the raw output of Fetch API, so you can work with headers.

```js
fitch.get('image.jpg', { raw: true })
  .then((response) => {
    if(response.ok) {
      return response.blob()
    } else {
      console.log('Network response was not ok.');
    }
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob)
    myImage.src = objectURL
  })
  .catch(fitch.error)
```

### Options from Fetch API

Customise your request with native Fetch options:

**cache** - [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache).

**credentials** - [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**headers** - [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/headers).

**integrity** - [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**mode** - [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode).

**redirect** - [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**referrer** - [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**referrerPolicy** - [See more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).
