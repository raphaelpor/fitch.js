# Métodos disponíveis:

**get(url, config)**

```js
fitch.get(apiUrl, config)
  .then(data => console.log(data))
```

**Note:** O método GET  não permite `body` dentro do objeto de configuração.

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

## Concurrency

**all(iterable)**

`all()` é um função para lidar com requests simultâneos.

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


## Manipulando erros
Se houver um erro na chamada do Fetch, você pode pegá-lo usando `catch()`:

```js
fitch.get(apiUrl)
  .then(data => console.log(data))
  .catch(err => console.error(err))
```

**Next: [Veja como personalizar seus requests](https://github.com/raphaelpor/fitch.js/blob/master/docs/pt-br/Config.md).**
