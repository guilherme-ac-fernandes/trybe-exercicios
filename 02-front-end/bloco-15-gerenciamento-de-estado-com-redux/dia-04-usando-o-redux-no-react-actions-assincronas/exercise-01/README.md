###  Atividade de fixação 1:
> A partir da _[branch exercise-one](https://github.com/tryber/exercise-redux-thunk/tree/exercise-one)_ crie a pasta `exercise-01` e realize o seguinte requisito:

Nesse exercício, utilizaremos essa _[API](https://aws.random.cat/meow)_ para realizarmos nossas requisições. Vamos focar apenas no desenvolvimento de uma `action` assíncrona e na implementação do `thunk` na `store`. O `reducer`, assim como os componentes da aplicação, já estão prontos. Desse modo, realizaremos modificações apenas nos arquivos `actions/index.js` e `store/index.js`.

Nessa aplicação, temos dois componentes:

* `Gallery.js`, o qual renderiza uma imagem a partir de uma URL armazenada no estado global da aplicação.
* `Button.js`, o qual renderiza um botão que, ao ser clicado, faz a requisição de uma imagem e armazena a URL no estado global por meio de uma `action` assíncrona.
Como a aplicação está quase pronta, já temos o `reducer` e os componentes concluídos, nos falta somente a implementação do `thunk` e da `action assíncrona`. Para isso:

Requisito 1 - Faça as implementações necessárias na `store`.

Requisito 1 - No arquivo `actions/index.js`, desenvolva a `action` assíncrona necessária para a aplicação rodar adequadamente. Essa `action` assíncrona deverá fazer o uso de outras duas `actions`:

> Da requestAPI: para informar ao usuário que a informação solicitada está carregando.
>
> Da getPicture: para salvar no estado global da aplicação a URL da imagem solicitada da API.
>
> Observação: Para essa aplicação, é necessário que o nome da action assíncrona seja fetchAPI.


