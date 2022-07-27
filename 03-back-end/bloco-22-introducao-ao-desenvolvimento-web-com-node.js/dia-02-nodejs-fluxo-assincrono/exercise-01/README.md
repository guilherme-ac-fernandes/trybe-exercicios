###  Atividade de fixação 1:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-01`. Realize os exercícios dentro desse pacote:

Requisito 1 - Crie uma função que receba três parâmetros e retorna uma Promise.

* Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo `”Informe apenas números”`.

* Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro `((a + b) * c)`.

* Caso o resultado seja menor que `50`, rejeite a Promise com o motivo `”Valor muito baixo”`.

* Caso o resultado seja maior que `50`, resolva a Promise com o valor obtido.

