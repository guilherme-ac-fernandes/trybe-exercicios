## JavaScript - Objetos e Funções

### Parte I - Objetos e For/In


Usando o objeto abaixo, faça os exercícios a seguir:

```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

> Criar arquivo `script-1.js`
1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
`Bem-vinda, Margarida`

> Criar arquivo `script-2.js`
2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

```
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```

> Criar arquivo `script-3.js`
3. Faça um `for/in` que mostre todas as chaves do objeto. Valor esperado no console:

```
personagem
origem
nota
recorrente
```

> Criar arquivo `script-4.js`
4. Faça um novo `for/in`, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

```
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

> Criar arquivo `script-5.js`
5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

```
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```

Usando o objeto abaixo, faça os exercícios a seguir:

```
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```

> Criar arquivo `script-6.js`
6. Acesse as chaves `nome`, `sobrenome` e `titulo`, que está dentro da chave `livrosFavoritos`, e faça um `console.log` no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

> Criar arquivo `script-7.js`
7. Adicione um novo livro favorito na chave `livrosFavoritos`, que é um array`. Atribua a esta chave um objeto contendo as seguintes informações:

```
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```

> Criar arquivo `script-8.js`
8. Acesse as chaves `nome` e `livrosFavoritos` e faça um `console.log` no seguinte formato: "Julia tem 2 livros favoritos".

