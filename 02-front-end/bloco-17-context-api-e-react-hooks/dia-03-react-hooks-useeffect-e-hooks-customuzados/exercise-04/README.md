Esse é um projeto para o conteúdo sobre `React Hooks - useEffect e Hooks customizados`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch` ou `git branch -a`

Verifique se as seguintes branchs apareceram:

  `exercise-one`
  `exercise-two.one`
  `exercise-two.two`
  `exercise-two.three`

- Cada branch dessas será um exercício.
- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Faça os exercícios 1.1, 1.2 e 1.3, disponibilizado nas branchs `exercise-one.one`, `exercise-one.two` e `exercise-one.three`. Siga as instruções abaixo em conjunto com os comentários no próprio código.

- 1.1: utilize o hook useState para conectar um campo de formulário com o componente React. Siga as instruções que estão no código do arquivo Greeting.js

- 1.2: utilize o hook useEffect para atualizar o localStorage com base nas alterações do estado do componente. Siga as instruções que estão no código do arquivo Greeting.js

- 1.3: siga as instruções que estão no código do arquivo App.js e FavoriteAnimal.js para criar uma pequena aplicação que exibe o nome e o animal favorito de uma pessoa

---

#### Exercício 2

Refatore o exercício sobre o Reddit que está disponibilizado na branch `exercise-two`, utilizando Hooks. Transforme todos os componentes de classe em componente funcionais.

---
