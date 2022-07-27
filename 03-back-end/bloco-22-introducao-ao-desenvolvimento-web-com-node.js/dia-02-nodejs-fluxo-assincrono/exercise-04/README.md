###  Atividade de fixação 4:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-04`. Realize os exercícios dentro desse pacote:

> Crie o arquivo `simpsons.json` para realizar os requisitos abaixo. Utilize `then/catch` ou `async/await` para escrever seu código.

```
[
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]
``

Requisito 1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato `id - Nome`.

Requisito 2 - Crie uma função que receba o `id` de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o `id` informado. Caso não haja uma personagem com o `id` informado, rejeite a Promise com o motivo `”id não encontrado".

Requisito 3 - Crie uma função que altere o arquivo `simpsons.json` retirando os personagens com `id 10 e 6`.

Requisito 4 - Crie uma função que leia o arquivo `simpsons.json` e crie um novo arquivo, chamado `simpsonFamily.json`, contendo as personagens com `id de 1 a 4`.

Requisito 5 - Crie uma função que adicione ao arquivo `simpsonFamily.json` o personagem `Nelson Muntz`.

Requisito 6 - Crie uma função que substitua o personagem `Nelson Muntz` pela personagem `Maggie Simpson` no arquivo `simpsonFamily.json`.


