###  Atividade de fixação 1:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-01`. Realize os exercícios dentro desse pacote:

Requisito 1 - Crie uma rota `POST /user/register` que receba uma requisição que envie `username`, `email` e `password` no `body` da requisição, onde:

* `username` deve ter mais de `3` caracteres.

* `email` deve ter o formato `email@email.com`.

* `password` deve conter no mínimo `4` caracteres e no máximo `8` (todos números).

* Para todos os casos não atendidos acima deve ser retornado o código de status e um `JSON status 400 e { "message": "invalid data" }`.

* Caso tenha sucesso deve ser retornado uma resposta com o código de status e um `JSON status 201 e { "message": "user created" }`.


Requisito 2 - Crie uma rota `POST /user/login` que receba uma requisição que envie `email e password` no `body` da requisição e devolva um `token` como resposta, onde:

* O formato desse `token` retornado deve ser uma `string` aleatória com `12` caracteres.

* O `email` recebido deve ter o formato `email@mail.com`.

* O `password` deve conter no mínimo `4` caracteres e no máximo `8`, todos números.

* Para todos os casos não atendidos acima deve ser retornado o código de status e um `JSON status 400 e { "message": "email or password is incorrect" }`.

* Caso tenha sucesso deve ser retornado uma resposta com o código de status e um `JSON status 200 e { "token": "86567349784e" }`.


Requisito 3 - Faça a `conteinerização` da sua aplicação.

* Sua aplicação deve ser executada na porta `3001` de um `container` `Docker`.

* As alterações realizadas no código devem ser refletidas sem a necessidade de reinicialização do `container`.
