###  Atividade de fixação 2:
> A partir do comando `npx create-react-app nome-app` crie a pasta `exercise-02` e realize os seguintes requisitos:

Requisito 1 - Crie uma lista de tarefas simples seguindo os passos abaixo:

* Insira a função `Task` a seguir acima do seu componente App dentro do arquivo `App.js`:

```
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
```

Requisito 2 - Agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando `npm start`.

Requisito 3 - Por fim, crie uma array de compromissos e use a função `map` para que cada item do array apareça, como um item de lista, no seu componente App.

