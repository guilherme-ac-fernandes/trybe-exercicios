###  Atividade de fixação 2:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-02`. Realize os exercícios dentro desse pacote:

Requisito 1 - Crie uma rota `GET /btc/price` que receba uma requisição com um `token` na chave `Authorization` do `headers` da requisição e verifique se ele está correto, onde:

* O `token` deve ser uma `string` de `12` caracteres contendo letras e/ou números.

* Para todos os casos não atendidos acima deve ser retornado o código de status e um `JSON status 401 e { "message": "invalid token" }`.

* Caso tenha sucesso deve ser feito um `fetch` em uma API externa de sua preferência e retorne os dados da API como resposta.

* Sugestão de API [CoinDesk](https://api.coindesk.com/v1/bpi/currentprice/BTC.json).


Requisito 2 - Faça a `conteinerização` da sua aplicação.

* Sua aplicação deve ser executada na porta `3001` de um `container` `Docker`.

* As alterações realizadas no código devem ser refletidas sem a necessidade de reinicialização do `container`.

**Dica 1:** O `token` será passado pelo `header` da seguinte forma: `authorization: 86567349784e`. 
**Dica 2:** Para fazer uma requisição a uma API externa utilize o `NODE-FETCH` ou `AXIOS`.

