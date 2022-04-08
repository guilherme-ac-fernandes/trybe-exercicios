###  Atividade de fixação 1:
> A partir do _[repositório](https://github.com/tryber/exercise-pokedex-state)_ crie a pasta `exercise-01` e realize os seguintes requisitos:

Requisito 1 - Altere a sua página para que, ao invés de exibir toda a lista de todos os pokemon, ela exiba um pokemon por vez. Ao apertar um botão de `próximo pokemon`, a página passa a exibir o próximo pokemon da lista, e depois o próximo, e assim sucessivamente. Ao se chegar ao último pokemon da lista, a pokedex deve voltar para o primeiro pokemon no apertar do botão.

Requisito 2 - Sua pokedex deve ter dois botões contendo os tipos `Fire` e `Psychic`. A partir dessa seleção, a pokedex deve circular somente pelos pokemon daquele tipo. Quando a página carrega, um desses filtros deve estar selecionado.

Requisitos Bônus:

* Separe os estilos de CSS por componente, fazendo um `arquivo.css` para cada.

* Sua pokedex deve ter um terceiro botão chamado `All` para resetar o filtro. Após clicá-lo, a pokedex deve voltar a circular por todos os pokemon. Quando a página carrega, o filtro selecionado deve ser o `All`.

* Crie um componente `Button` e use-o para fazer os botões reutilizáveis da sua Pokedex. Dica: pesquise sobre o `this.props.children` do React!

* Faça os botões de filtragem serem dinâmicos: sua pokedex deve gerar um botão de filtragem para cada tipo de pokemon disponível nos dados, independente de quais ou quantos sejam, sem repetição de tipos. Ou seja, se sua pokedex possui pokemon do tipo Fire, Psychic, Electric e Normal, deve aparecer como opção de filtro um botão para cada um desses tipos. Além disso, ela deve manter o botão `All`.

* Faça o botão de `próximo pokemon` ser desabilitado se a lista filtrada de pokemon tiver um só pokemon.



