####  Atividade de fixação 1:
> Antes de começar:
> 
> * Todas as funções já estão impĺementadas, você precisará se preocupar apenas em testá-las.
>
> * Vamos usar o `fetchSimulator` como uma biblioteca Javascript, portanto, não se preocupe em entender a estrutura dessa função, você aprenderá a implementar esse tipo de função futuramente no curso.
>
> * Não se esqueça de atualizar o número de `expect.assertions`, a cada `expect` que você implementar em seus testes.
>
> **Dica de ouro**: leia e entenda cada parte da implementação da função `getMagicCard` que está no arquivo `src/magic.js`. Isso te ajudará a implementar os testes.
>
> **Outra dica de ouro**: a função `getMagicCard` com o argumento que vamos usar durante esse exercício, "**130550**", vai retornar o seguinte objeto:
> ```javascript
> {
>   name: "Ancestor's Chosen",
>   manaCost: "{5}{W}{W}",
>   types: [ "Creature" ],
>   subtypes: [ "Human", "Cleric" ],
>   rarity: "Uncommon",
> }
> ```

---

#### Requisitos:

Requisito 1 - Complete a sintaxe do `async/await`. Abra o arquivo `tests/magic.test.js`, nele você encontrará a estrutura inicial dos testes já montada. Essa estrutura no entanto está incompleta e precisa de ajustes para funcionar corretamente.

Requisito 2 - Implemente um teste que verifique se a propriedade `name` possui valor `Ancestor's Chosen`.

Requisito 3 - Implemente um teste que verifique se `getMagicCard` é uma função.

Requisito 4 - Implemente um teste que verifique se, ao chamar a função `getMagicCard` com o argumento "**130550**", a função *fetch* foi chamada.

Requisito 5 - Implemente um teste que verifique se, ao chamar a função `getMagicCard` com o argumento "**130550**", a função *fetch* foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550".

Requisito 6 - Implemente um teste que verifique se o retorno da função `getMagicCard` é igual ao objeto `card`.

> ***spoiler-alert***: você pode desestruturar o objeto response e obter diretamente suas propriedades.

Requisito 7 - Implemente um teste que verifica se, ao chamar a função `getMagicCard` com o argumento `'idDesconhecido'`, retorna um erro com a mensagem: "Id is not found!".

> ***Dica***: Para comparar com o objeto de erro retornado da API, você pode usar o `new Error ('mensagem esperada aqui')`.

> ***Dica***: Na função `fetchSimulator`, está sendo usado o método `Promise.reject()`, que retorna uma promise que não foi resolvida. Para retornar um erro quando isso acontecer, usamos o `new Error('mensagem de erro')` dentro do `Promise.reject()`, que vai criar um erro que a mensagem vai ser o que está escrito dentro dos parênteses. Por isso você deve testar usando o `new Error()`.

