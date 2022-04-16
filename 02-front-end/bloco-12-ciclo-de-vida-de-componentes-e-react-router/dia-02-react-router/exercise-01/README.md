###  Atividade de fixação 1:
> A partir do _[repositório](https://github.com/tryber/exercise-pokedex-router)_ crie a pasta `exercise-01` e realize os seguintes requisitos:

Nesse repositório ja foi instalado o `react-router-dom`, só é necessário executar `npm install` uma vez dentro da pasta raiz para utilizá-lo.

#### Demostração
<p align="center">
  <img src="" alt="Pokedex React-Router - Demostração"/>
</p>

Requisito 1 - Ao carregar a aplicação no caminho de URL "/", é preciso que seja mostrada a Pokédex.

Requisito 2 - Adicione um link de navegação para o pokemon sendo mostrado pela Pokedex, de forma que quem usar a aplicação consiga clicar no link para ver mais detalhes do pokemon em questão. O nome do caminho da URL fica a seu critério. Lembre-se de que é preciso passar para a URL um identificador do pokemon, de forma que cada pokemon seja unicamente associado com o caminho de URL. Ou seja, se você quer que os detalhes de um pokemon se encontrem no caminho de URL `/pokemon`, você precisa passar para esse caminho um parâmetro de URL para que somente um pokemon seja visualizado. Todo pokemon tem um `id` na Pokedex, logo você poderia usá-lo como parâmetro de URL para permitir que quem usar sua aplicação consiga acessar detalhes do pokemon Pikachu via caminho de URL `/pokemon/25`, onde 25 é o id do Pikachu.

Requisito 3 - Crie um componente `PokemonDetails` para ser usado na visualização de mais detalhes do pokemon no passo anterior. É preciso que sejam mostradas as seguintes informações:

* Nome do pokemon.

* Tipo do pokemon.

* Peso do pokemon, com sua devida medida de peso.

* Sumário informativo a respeito do pokemon.

* Mapa(s) que mostra(m) as possíveis localizações do pokemon.

Requisito 4 - Adicione um conjunto fixo de links de navegação no topo de sua aplicação, de forma que ele esteja sempre disponível para quem fizer uso. De início, adicione um link que leve quem usa sua aplicação de volta para a Pokédex.

Requisito 5 - Crie um componente `About` para ser usado na visualização que explica brevemente o que é uma Pokédex, com alguma imagem ilustrativa.

Requisito 6 - Adicione no conjunto fixo de links de navegação um link que permita levar quem usa sua aplicação para a visualização de explicação da Pokédex.

Requisito 7 - Crie um componente `NotFound`, de forma que somente ele seja renderizado caso o caminho atual da URL da aplicação não corresponda a rota alguma definida anteriormente.

Requisito 8 - Permita que um pokemon consiga ser favoritado dentro de sua visualização de mais detalhes. Uma vez favoritado, adicione algum indicativo visual, de forma que quem vir o pokemon saiba que ele foi favoritado. O indicativo de que o pokemon foi favoritado precisa também aparecer na página principal, que mostra a Pokedex.

Requisito 9 - Crie uma visualização que mostre somente os pokemon favoritados e torne-a acessível para quem a usar, criando um link para ela no conjunto fixo de links que você fez anteriormente.

Requisito 10 - Salve os pokemon favoritados no `Local Storage` e recupere-os quando a aplicação for inicializada.

