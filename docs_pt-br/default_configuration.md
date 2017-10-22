# Configuração padrão e interceptador de requests

Fitch.js possui um método chamado `init`, que recebe um objeto com uma configuração padrão e um  interceptador de requests para todos as requisições.

## **init({ config, interceptor })**
### Params
- **Object**
  - Type: `object`
  - *Required*
    - **config**
      - Type: `object`
    - **interceptor**
      - Type: `function`

```js
const fetchWrapper = fitch.init({
  config: { raw: true },
  interceptor: response => response.json(),
});

fetchWrapper.get(baseUrl).then(data =>
  console.log('GET with interceptor\t>>>', data)
);
```
