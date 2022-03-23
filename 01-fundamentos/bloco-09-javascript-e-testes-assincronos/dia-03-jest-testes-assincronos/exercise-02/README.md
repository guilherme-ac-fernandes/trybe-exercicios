####  Atividade de fixação 2:
> Antes de começar:
>
> * Dentro da pasta `data`, você encontrará o arquivo `favoriteCards`, leia e compreenda sua estrutura para realizar os exercícios.
>
> * A função `saveFavoriteMagicCard`, além de realizar a chamada a API, ela também modifica o arquivo `favoriteCards`, adicionando um novo card a cada execução.
>
> * Não se esqueça de atualizar o número de `expect.assertions`, a cada `expect` que você implementar em seus testes.
>
> **Dica de ouro**: leia e entenda cada parte da implementação da função `saveFavoriteMagicCard` que está no arquivo `src/magic.js.` Isso te ajudará a implementar os testes.
>


##### Requisitos:

Agora temos um arquivo com algumas das cartas preferidas do nosso jogador. Você pode verificar a sua estrutura no arquivo `data/favoriteCards.js`. Utilizaremos este arquivo para os próximos passos.

Requisito 1 - Implemente um teste que verifique que após a execução da função `saveFavoriteMagicCard`, `favoriteCards` passa a possuir `length === 5`.

Requisito 2 - Dentro do mesmo it, implemente um teste que verifique que na última posição do array `favoriteCards` existe um card com o a propriedade `name` e valor "Beacon of Immortality".

Requisito 3 - Ainda no mesmo it, chame a função `saveFavoriteMagicCard` com o argumento "**130554**" e verifique se `favoriteCards` passa a possuir `length === 6`.

**Para os próximos exercícios, descomente o teste dentro do escopo do segundo it.**

Requisito 4 - Após descomentar o teste dentro do segundo it, rode os testes. 

> Você vai perceber que o teste falhou. Consegue entender porque ele falha? Isso mesmo, a função `saveFavoriteMagicCard` modificou o arquivo `favoriteCards` no escopo do it anterior. Desta maneira, para o Jest, o array `favoriteCards` não possui quatro cards, mas sim, seis.

Requisito 5 - Implemente a função `retrievesFavoriteCards` com uma lógica capaz de restaurar o array `favoriteCards`, depois chame essa função dentro do método `afterEach` para os testes poderem passar.



