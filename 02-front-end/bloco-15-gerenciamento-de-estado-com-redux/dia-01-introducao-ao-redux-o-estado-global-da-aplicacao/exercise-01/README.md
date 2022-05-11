###  Atividade de fixação 1:
> Crie o arquivo `index.html` e realize os seguintes requisitos:

Vamos construir um estado gerenciado pelo Redux e vamos realizar algumas modificações nele. O nosso objetivo será manipular a cor de um container através do Redux. O código inicial será disponibilizado a seguir:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
    <style>
      body {
        height: 100vh;
        margin: 0;
        padding: 0;
      }

      #container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      button {
        height: 50px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <p>Color: <span id="value">white</span></p>
      <button id="previous">Previous color</button>
      <button id="next">Next color</button>
    </div>
    <script>
      const ESTADO_INICIAL = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };
    </script>
  </body>
</html>
```

Requisito 1 - Crie uma store para a nossa aplicação.

Requisito 2 - Crie um `reducer`, implementando um switch retornando apenas o estado inicial como default. Não se esqueça de colocar o `reducer` como parâmetro para o `createStore`, feito na etapa anterior.

Requisito 3 - Incremente o switch criado no exercício anterior com as `actions` `NEXT_COLOR` e `PREVIOUS_COLOR`. Essas `actions` devem alterar o valor `index guardado no `ESTADO_INICIAL`. Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.

Requisito 4 - Crie `eventListeners` que escutam os cliques de cada botão, o `Previous color` e o `Next color`, e realizam um `dispatch` com o respectivo `action.type` de cada.

Requisito 5 - Faça o `subscribe` da store, alterando o `innerHTML` da tag com id `value` para a cor atual e o style do elemento com id `container. Você deverá ser capaz de ver as cores mudando ao fundo, e o nome da cor exibida.

Requisito 6 - Crie um botão com o texto Random color, um `eventListener` e uma `action` no `reducer` adicionando uma cor aleatória ao array `colors` guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado `index` para a posição dela. Para facilitar, segue uma função que gera cores aleatórias:

```
function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}
```

As cores criadas randomicamente devem ser armazenadas no array. Dessa forma, com os botões de `Next color` e `Previous color`, poderemos trafegar entre as cores padrões e as randômicas. Utilize o `spread operator` para adicionar cada cor randômica.




