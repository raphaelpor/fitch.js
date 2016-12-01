# Métodos disponíveis:

## **get(url, config)**
### Parâmetros
- **url**
  - Tipo: `string`
  - *Obrigatório*

- **config**
  - Tipo: `object`

```js
fitch.get(apiUrl, config)
  .then(response => console.log(response))
```

**Note:** O método GET  não permite `body` dentro do objeto de configuração.

## **post(url, config)**
### Parâmetros
- **url**
  - Tipo: `string`
  - *Obrigatório*

- **config**
  - Tipo: `object`
  - *Obrigatório*

```js
const req = { body: { name: 'Happy cat' } }

fitch.post(apiUrl, req)
  .then(response => console.log(response))
```

## **put(url, config)**
### Parâmetros
- **url**
  - Tipo: `string`
  - *Obrigatório*

- **config**
  - Tipo: `object`
  - *Obrigatório*

```js
const req = { body: { name: 'Happy cat' } }

fitch.put(apiUrl, req)
  .then(response => console.log(response))
```

## **patch(url, config)**
### Parâmetros
- **url**
  - Tipo: `string`
  - *Obrigatório*

- **config**
  - Tipo: `object`
  - *Obrigatório*

```js
const req = { body: { name: 'Happy cat' } }

fitch.patch(apiUrl, req)
  .then(response => console.log(response))
```

## **del(url, config)**
### Parâmetros
- **url**
  - Tipo: `string`
  - *Obrigatório*

- **config**
  - Tipo: `object`

```js
fitch.del(apiUrl)
  .then(response => console.log(response))
```

# Concurrency

## **all(iterable)**
### Parâmetros
- **iterable**
  - Tipo: `array`
  - *Obrigatório*

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


# Manipulando erros
Se houver um erro na chamada do Fetch, você pode pegá-lo usando `catch()`:

```js
fitch.get(apiUrl)
  .then(response => console.log(response))
  .catch(err => console.error(err))
```

### **Próximo: [Veja como personalizar seus requests](https://github.com/raphaelpor/fitch.js/blob/master/docs/pt-br/Config.md).**
