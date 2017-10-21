# COnfiguração

Fitch.js permite usar configurações para personalizar seus requests. É necessário apenas passar um objeto com a sua configuração, como segundo argumento das chamadas. Veja abaixo, as opções disponíveis.

## Opções

### **body** `object`

Recebe um objeto json, que é transformado para string antes fazer a chamada.

**Note:** O método GET  não permite `body` dentro do objeto de configuração.

```js
const req = { body: { name: 'Happy cat' } }

fitch.post(apiUrl, req)
  .then(response => console.log(response))
```

### **dataType** `string`

Retorna os dados Returns a parsed data of the type you need.

Opções válidas são: `arrayBuffer`, `blob`, `formData`, `json` e `text`.

*Opção padrão:* `json`.

Veja mais em [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Body).

```js
// Exemplo com arquivo de imagem
const config = { dataType: 'blob' }

fitch.get('image.jpg', config)
  .then((response) => {
    const objectURL = URL.createObjectURL(response.data)
    myImage.src = objectURL
  })

// Exemplo padrão (json).
fitch.get('file.json')
  .then(response => console.log(response))
```

### **params** `object`

Não é necessário passar os parâmetros de URL, como string. O Fitch.js permite que sejam passados or meio do objeto `params`.

```js
const config = {
  params: { // Transforma para: '?test1=test-1&test2=test-2'
    test1: 'test-1',
    test2: 'test-2',
  },
}

fitch.get(apiUrl, config)
  .then(response => console.log(response))
```

### **raw** `boolean`

Retorna a resposta pura do Fetch API, que permite trabalhar com os headers.

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

### Opções nativas do Fetch API

Personalize seus requests com as opções nativas do Fetch:

**cache** - [Veja mais em MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache).

**credentials** - [Veja mais em MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**headers** - [Veja mais em MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/headers).

**integrity** - [Veja mais em MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**mode** - [Veja mais em MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode).

**redirect** - [Veja mais em MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**referrer** - [Veja mais em MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).

**referrerPolicy** - [Veja mais em MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch).
