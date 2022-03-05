## JavaScript ES6 - Fluxo de exceção e Objetos

####  Atividade de fixação 1:
> Utilizando o arquivo `index-01.html` fornecido, realize as seguintes modificações:

Requisito 1 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.

* Tente executar a aplicação com um dos valores em branco.

* Utilize o `throw new Error` e o bloco `try/catch`.

* Imprima o erro no parágrafo com id `result`, para que a pessoa usuária saiba o que aconteceu.

* Evite funções que tenham muitas responsabilidades distintas.

Requisito 2 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.

* Você pode fazer essa verificação utilizando a função `isNan().

Requisito 3 - Você se lembrou de limpar os `inputs` após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally ?


####  Atividade de fixação 2:
> Utilizando o arquivo `script-02.js` fornecido, realize as seguintes modificações:

Requisito 1 - Complete a função `customerInfo()` para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

* Note que o parâmetro da função já está sendo passado na chamada da função.

Requisito 2 - Complete a função `orderModifier()` para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

* Modifique o nome da pessoa compradora.

* Modifique o valor total da compra para R$ 50,00.

####  Atividade de fixação 3:
> Utilizando o arquivo `script-03.js` fornecido, realize as seguintes modificações:

Requisito 1 - Crie uma função para adicionar o turno da noite na `lesson2`. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

Requisito 2 - Crie uma função para listar as `keys` de um objeto. Essa função deve receber um objeto como parâmetro.

Requisito 3 - Crie uma função para mostrar o tamanho de um objeto.

Requisito 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

Requisito 5 - Crie um objeto de nome `allLessons`, que deve agrupar todas as aulas através do `Object.assign`. Cada chave desse novo objeto será uma aula, sendo essas chaves: `lesson1`, `lesson2` e `lesson3`. Ao executar o comando `console.log(allLessons)`, a saída deverá ser a seguinte:

```
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
```

Requisito 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

Requisito 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

```
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
```

Requisito 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

```
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```

####  Atividade de fixação 4:
> Crie o arquivo `script-04.js` e realize os seguintes requisitos:

Requisito 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no requisito 5 do exercício anterior.

Requisito 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no requisito 5 do exercício anterior. Exemplo:

```
console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
```

