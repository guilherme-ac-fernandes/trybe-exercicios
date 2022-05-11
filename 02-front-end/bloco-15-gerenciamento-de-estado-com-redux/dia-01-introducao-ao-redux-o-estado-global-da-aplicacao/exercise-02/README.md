###  Atividade de fixação 2:
> Crie o arquivo `index.html` e realize os seguintes requisitos:

Vamos combinar dois `reducers` existentes e retornar algumas informações para a nossa aplicação.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
  </head>
  <body>
    <div id="container">
      <h1>Informações do primeiro Reducer:</h1>
      <p>Nome: <span id="nome-1">Rodrigo</span></p>
      <p>Sobrenome: <span id="sobrenome-1">Santos da Silva</span></p>
      <p>Endereço: <span id="endereco-1">Rua Soldado Mathias, 765</span></p>
      <p>Cidade: <span id="cidade-1">Belo Horizonte</span></p>
    </div>
    <div id="container">
      <h1>Informações do segundo Reducer:</h1>
      <p>Nome: <span id="nome-2">Bruna</span></p>
      <p>Sobrenome: <span id="sobrenome-2">Santana Oliveira</span></p>
      <p>Endereço: <span id="endereco-2">Rua Holanda, 332</span></p>
      <p>Cidade: <span id="cidade-2">São Paulo</span></p>
    </div>
    <script>
      const ESTADO_INICIAL_1 = {
        nome: 'Rodrigo',
        sobrenome: 'Santos da Silva',
        endereco: 'Rua Soldado Mathias, 765',
        cidade: 'Belo Horizonte',
      };

      const ESTADO_INICIAL_2 = {
        nome: 'Bruna',
        sobrenome: 'Santana Oliveira',
        endereco: 'Rua Holanda, 332',
        cidade: 'São Paulo',
      };

      const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };

      const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };
    </script>
  </body>
</html>
```

Requisito 1 - Combine os `reducers` existentes com a função `combineReducers e salve-o em uma constante.

Requisito 2 - Crie uma store com a combinação dos `reducers`.

Requisito 3 - Crie `actions` que alterem o nome e o sobrenome dos estados iniciais, e adapte seu respectivo `reducer`.

Requisito 4 - Crie `dispatchs` para alterar os nomes após alguns segundos depois que a página carregar. Segue uma dica de como resolver este exercício:

```
window.onload = () => {
        setTimeout(() => {
          //Seu dispatch vem aqui //
        }, 3000);
      };
```

Requisito 5 - Adicione um `store.subscribe()` para atualizar as informações na página de acordo com o que temos armazenado na store. Quando a página carregar o nome renderizado deve ser alterado após alguns segundos.




