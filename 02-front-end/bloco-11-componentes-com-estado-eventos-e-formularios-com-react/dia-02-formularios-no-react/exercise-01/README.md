###  Atividade de fixação 1:
> A partir do _[repositório](https://github.com/tryber/exercise-pokedex-state)_ crie a pasta `exercise-01` e realize os seguintes requisitos:

Crie um formulário de cadastro de currículo com base na especificação seguintes:

Requisito 1 - Crie um `<fieldset>` para os dados pessoais a seguir:

Nome
```
Tipo - Texto
Limite de 40 caracteres
Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
Campo obrigatório
```

Email
```
Tipo - Texto
Limite de 50 caracteres
Campo obrigatório
```

CPF
```
Tipo - Texto Númerico
* Limite de 11 caracteres
* Campo obrigatório
```

Endereço
```
Tipo - Texto
Limite de 200 caracteres
Remover qualquer caracter especial que seja digitado
Campo obrigatório
```

Cidade
```
Tipo - Texto
Limite de 28 caracteres
Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
Campo obrigatório.
```

Estado
```
Tipo - ComboBox
Todos os estados do Brasil
Campo obrigatório.
```

Tipo de Residência 
```
Tipo - Radio Button
Casa, Apartamento
Campo obrigatório.
```

Requisito 2 - Crie outro `<fieldset>` para dados do seu último emprego:

Resumo do currículo
```
Tipo - TextArea
Limite de 1000 caracteres
Campo obrigatório.
```

Cargo
```
Tipo - Texto
Limite de 40 caracteres
Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
Campo obrigatório
```

Descrição do cargo
```
Tipo - TextArea
Limite de 500 caracteres
Campo obrigatório
```

Requisito 3 - Crie um botão que, ao ser clicado, monta uma `<div>` com o consolidado dos dados que foram inseridos no formulário.

Requisito 4 - Crie um botão Limpar que limpa todos os campos do formulário e a `<div>` com seu currículo também.

Requisitos Bônus: Utilize Regex (Expressões Regulares) para validar o campo email. O formato esperado é: trybe@gmail.com.
