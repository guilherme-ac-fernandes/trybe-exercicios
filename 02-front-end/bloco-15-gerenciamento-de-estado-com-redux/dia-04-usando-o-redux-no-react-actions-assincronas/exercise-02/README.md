
###  Atividade de fixação 2:
> A partir da _[repositório](https://github.com/tryber/exercise-game-of-thrones-characters)_ crie a pasta `exercise-02` e realize o seguinte requisito:

Consiste em uma pequena aplicação que nos permitirá buscar informações sobre os personagens da famosa série de livros `As Crônicas de Gelo e Fogo`.

Neste repositório você encontrará alguns componentes React prontos. Além do próprio App, você terá o componente `SearchForm` - que se trata de um componente de classe que armazena o valor de `inputText` na medida que se digita algo no campo de busca e, quando se clica no botão da página, leva o texto digitado como valor de `characterSearched`.

Já o componente `characterInfo` exibe na tela informações obtidas através da API (que já está disponível para uso na pasta `services`) - tais como o nome completo, os apelidos, o gênero e os livros em que o personagem aparece. Então, a API está pronta, os componentes estão prontos, mas precisamos obter as informações da API e passar suas informações para a tela. Para tanto:

Requisito 1 -  Crie o `thunk` que fará a requisição para a API e as `actions` referentes ao retorno com sucesso ou falha na dita requisição.

Requisito 2 -  Crie o `Reducer` que tratará as `actions criadas no passo 1 e insira-o no `combineReducers`. 

* Importante: a API retorna uma array com um único objeto, logo você precisa acessar a posição correta do array para, em seguida, se utilizar do objeto.

Requisito 3 -  Conecte a `action` a ser despachada no seu componente `SearchForm` e os `states` oriundos do `reducer` no componente `characterInfo`, bem como prepare o componente para exibir uma mensagem em caso de erro da API.

Requisito 4 - Utilize a `Prop` importadas do seu `reduce`r para renderizar o as informações na tela. 

Observação: a nossa aplicação somente consegue fazer buscas pelo nome completo do personagem - ou seja, procurar somente por `Tyrion` não nos dará nenhum retorno, já `Tyrion Lannister` sim.



