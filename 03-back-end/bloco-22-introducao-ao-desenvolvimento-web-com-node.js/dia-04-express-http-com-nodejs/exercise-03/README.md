###  Atividade de fixação 3:
> A partir da aplicação criada no requisito dois, realize as seguintes modificações:

Requisito 1 - Adicione autenticação a todos os endpoints:


* O token deve ser enviado através do `header Authorization`.

* O token deve ter exatamente `16` caracteres.

* Caso o token seja inválido ou inexistente, a resposta deve possuir o status `401 - Unauthorized` e o `JSON { message: 'Token inválido!' }`.


Requisito 2 - Crie uma rota `POST /signup`:

* A rota deve receber, no `body` da requisição, os campos `email`, `password`, `firstName` e `phone`.

* Caso algum dos campos não esteja preenchido, a response deve possuir status `401 - Unauthorized` e o `JSON { message: 'missing fields' }`.

* Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status `200 - OK`, e o `JSON { token: '<token-aleatorio>' }`.


**Dica:** Para gerar o token você pode utilizar a função randomBytes, do módulo crypto do Node, dessa forma:

```
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;
```


