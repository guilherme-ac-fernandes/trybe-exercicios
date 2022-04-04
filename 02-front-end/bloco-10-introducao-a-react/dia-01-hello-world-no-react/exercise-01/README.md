###  Atividade de fixação 1:
> A partir do comando `npx create-react-app nome-app` crie a pasta `exercise-01` e realize os seguintes requisitos:

Requisito 1 - Na pasta `src`, acesse `App.js` e remova todo o conteúdo da função App, de modo que ela fique assim:

```
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';

    function App() {
      return ();
    }

    export default App;
```

Requisito 2 - Na pasta `src`, crie um arquivo chamado `Component.js` crie um componente que retorne um `<h1>` com o seu nome um paragráfo `<p>` , com uma breve descrição sobre você.

* Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um `<div>`.


Requisito 3 - Importe seu componente em `App.js` de modo que ele seja renderizado na tela quando a aplicação for iniciada, `npm start`.

* Para isso você precisará utilizar o `export default` para exportar seu componente, o `export default` é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. A penúltima linha do arquivo `Component.js` deverá ficar da seguinte forma:

```
export default Component;
```

Requisito 4 - Execute sua aplicação, `npm start`, e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício você terá feito o seu primeiro componente React de classe.


