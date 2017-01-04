# Introdução

Fitch.js é um cliente HTTP bem leve, que usa Fetch API e roda em Node.js e em browsers antigos (com um polyfill).

## Instalação

Você pode instalar o Fitch.js usando NPM ou Yarn:
```sh
npm i --save fitch
# ou:
# yarn add fitch
```

Agora basta importar o Fitch.js e você estará pronto para fazer o seu primeiro request.

```js
import fitch from 'fitch'
// ou:
// const fitch = require('fitch')

const apiUrl = 'https://localhost:8080/'

fitch.get(apiUrl)
  .then(response => console.log(response))

  /* Resposta:
  {
    data: { foo: 'bar' },
    status: 200,
    statusText: 'Ok',
    headers: { Content-Type: application/json },
  }
  */
```

Também é possível usar o CDN:

unpkg
```html
<script src="https://unpkg.com/fitch/dist/index.umd.min.js"></script>
```

jsDelivr
```html
<script src="https://cdn.jsdelivr.net/g/fitch.js"></script>
```

### **Próximo: [Aprenda sobre os métodos disponíveis](https://github.com/raphaelpor/fitch.js/blob/master/docs/pt-br/Methods.md).**
