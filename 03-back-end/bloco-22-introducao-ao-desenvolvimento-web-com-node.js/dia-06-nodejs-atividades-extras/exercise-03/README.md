###  Atividade de fixação 3:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-03`. Realize os exercícios dentro desse pacote:

Requisito 1 - Crie uma rota `GET /posts/:id` que receba uma requisição com um `id` como param `route`, verifique existência do post com aquele `id`, onde:

* O `id` deve existir.

* Para todos os casos não atendidos acima deve ser retornado o código de status e um `JSON status 404 e { "message": "post not found" }`.

* Caso tenha sucesso deve ser retornado uma resposta com o código de status e um `JSON` com as informações do respectivo post.

Requisito 2 - Crie uma rota `GET /posts` que deve trazer todos os posts cadastrados, onde:

* Se não existir posts cadastrados retorne um `array vazio` e um status code `200 e { "posts": [] }`.

* Se existir posts cadastrados retorne um `array` com os posts e um status code.

Requisito 3 - Faça um `middleware` de erro. Caso tenha sido requisitada uma rota inexistente deve ser retornado o código de status e um `JSON status 404 e { "message": "Opsss, route not found!" }`.

Requisito 4 - Faça a `conteinerização` da sua aplicação.

* Sua aplicação deve ser executada na porta `3001` de um `container` `Docker`.

* As alterações realizadas no código devem ser refletidas sem a necessidade de reinicialização do `container`.

