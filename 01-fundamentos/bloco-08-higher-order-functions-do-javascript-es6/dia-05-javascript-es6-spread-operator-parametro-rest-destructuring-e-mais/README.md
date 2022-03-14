## JavaScript ES6 - Spread Operator, Parâmetro Rest, Destructuring e mais

####  Atividade de fixação 1:
> Crie o arquivo `script-01.js` e realize o seguinte requisito:

Requisito 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54.

```
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea() // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});
```

###  Atividade de fixação 2:
> Crie o arquivo `script-02.js` e realize o seguinte requisito:

Requisito 1 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.


###  Atividade de fixação 3:
> Crie o arquivo `script-03.js` e realize o seguinte requisito:

Requisito 1 - Escreva a função `personLikes`, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

```
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
```

###  Atividade de fixação 4:
> Crie o arquivo `script-04.js` e realize o seguinte requisito:

Requisito 1 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20.

```
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
```


###  Atividade de fixação 5:
> Crie o arquivo `script-05.js` e realize o seguinte requisito:

Requisito 1 - Escreva a função `swap`, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

```
const myList = [1, 2, 3];

// escreva swap abaixo
```

###  Atividade de fixação 6:
> Crie o arquivo `script-06.js` e realize o seguinte requisito:

Requisito 1 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:

```
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
```

###  Atividade de fixação 7:
> Crie o arquivo `script-07.js` e realize o seguinte requisito:

Requisito 1 - Escreva uma função `shipLength` que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

```
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'
```


###  Atividade de fixação 8:
> Crie o arquivo `script-08.js` e realize o seguinte requisito:

Requisito 1 - Escreva uma função `greet` que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

```
// escreva greet abaixo

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
```


###  Atividade de fixação 9:
> Crie o arquivo `script-09.js` e realize o seguinte requisito:

Requisito 1 - Existe um objeto `yearSeasons` que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.

* Dica : use object destructuring e spread operator.

* OBS : As estações do ano aqui descritas têm base nas estações do hemisfério norte.

```

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
```



