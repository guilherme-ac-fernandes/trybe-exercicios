### Testando APIs com Testes de Integração

####  Atividade de fixação:
> A partir do _[repositório](https://github.com/tryber/nodejs-jwt-base-project)_ realize o seguinte requisito:

Utilizando o processo de TDD, você irá implementar, a partir de testes, um `endpoint` para busca de dados de um usuário a partir do seu `ID: GET /api/users/:userId`.

Observações:

* Nos testes, isole o `IO` gerando um `mocks` para os modelos que serão utilizados no contexto. Lembre-se aqui de utilizar `stubs`.

* Utilize o plugin do `chai` de `requests HTTP` para consumir seus `endpoint` diretamente em seus testes.

Requisito 1 - O `endpoint` deverá ser autenticado, exigindo o envio de um `token` no `header` da requisição. Caso não seja passado um token, o `endpoint` deverá retornar:

* Código de status `400 - Not Found`.

* Mensagem de erro no `body` da response com o texto `Token não encontrado ou informado`.

* Lembre-se de utilizar o `middleware` de autenticação para validação do `JWT`.

Requisito 2 - O usuário poderá ver somente os seus próprios dados. Ou seja, ao receber uma `request`, deverá ser comparado se o `ID` vindo no parâmetro é o mesmo do armazenado no token. Para isso, utilize o `middleware` de autenticação para recuperar o `ID` dentro do token. Caso não seja, a API deverá retornar:

* Código de status `401 - Unauthorized`.

* Mensagem no `body` da response com o texto `Acesso negado`.

Requisito 3 - Caso o usuário esteja autenticado corretamente e esteja solicitando os dados de seu próprio usuário, o sistema deverá retornar:

* Os dados da pessoa usuária em um objeto no corpo da resposta.

* Código de status `200 - OK`.



