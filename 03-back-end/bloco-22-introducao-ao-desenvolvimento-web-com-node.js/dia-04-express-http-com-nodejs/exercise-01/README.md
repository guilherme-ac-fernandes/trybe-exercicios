###  Atividade de fixação 1:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-01`. Realize os exercícios dentro desse pacote:

Requisito 1 - Crie uma rota `GET /ping`:

* Sua rota deve retornar o seguinte `JSON: { message: 'pong' }`.

Requisito 2 - Crie uma rota `POST /hello`:

* Sua rota deve receber, no body da requisição, o seguinte `JSON: { "name": "<nome do usuário>" }`.

* Sua rota deve retornar o seguinte `JSON: { "message": "Hello, <nome do usuário>!" }`.

Requisito 3 - Crie uma rota `POST /greetings`:

* Sua rota deve receber o seguinte `JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }`.

* Caso a pessoa usuária tenha idade superior a `17` anos, devolva o `JSON { "message": "Hello, <nome do usuário>!" }` com o status code `200 - OK`.

* Caso a pessoa usuária tenha `17` anos ou menos, devolva o `JSON { "message": "Unauthorized" }` com o status code `401 - Unauthorized`.

Requisito 4 - Crie uma rota `PUT /users/:name/:age`:

* Sua rota deve retornar o seguinte `JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }`.

