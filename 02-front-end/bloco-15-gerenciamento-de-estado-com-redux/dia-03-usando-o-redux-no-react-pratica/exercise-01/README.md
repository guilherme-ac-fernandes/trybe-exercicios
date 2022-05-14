
###  Atividade de fixação 1:
> A partir da _[repositório](https://github.com/tryber/exercise-forms-redux/tree/master)_ crie a pasta `exercise-01` e realize o seguinte requisito:

Essa atividade consiste na implementação do Redux para dois formulários, cada um em uma etapa, um para dados pessoais e outro para dados profissionais e exibí-los na tela. Ao concluir o preenchimento dos dados pessoas, deverá ser direcionado para o formulário com os dados profissional, onde apenas após a conclusão apresentara os dados completos em outra página.

Para isso, é preciso salvar as informações de cada formulário no gerenciador de estados e, por fim, numa outra página, acessar esses dados para que sejam renderizados.

Você vai precisar de:

* Gerenciador de estados (Redux), para salvar as informações na store e também para acessá-las.


Requisito 1 -  Implemente o Redux:

* Dentro de uma pasta `redux`, crie as pastas `actions`, `reducers` e `store`.

* Dentro de `actions` crie um arquivo chamado `action.js`.

* Dentro de `reducers` crie um arquivo chamado `reducer.js` e, caso necessário, um arquivo `rootReducers.js` para usar o `combineReducers`.

* Dentro de `store` crie um arquivo chamado `store.js`.

* Implemente o `reducer`.

* Implemente a `store`.

* Implemente as `actions`.


Requisito 2 - Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na store.

> Dica: Lembre-se que o `mapStateToProps` lê as informações da `store` e o `mapDispatchToProps` envia as informações para a `store`.

Requisito 3 - Renderize, em `FormDataDisplay`, todas as informações que estão salvas na `store`.

