## JavaScript ES6 - Introdução a Higher Order Functions

####  Atividade de fixação 1:
> Crie o arquivo `script-01.js` e realize os seguintes requisitos:

Requisito 1 - Crie uma função que retorne a string 'Acordando!!’.

Requisito 2 - Crie outra função que retorne a string 'Bora tomar café!!’.

Requisito 3 - Crie mais uma função que retorne a string 'Partiu dormir!!’.

Requisito 4 - Agora desenvolva uma HOF chamada `doingThings` e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

```
// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
```

####  Atividade de fixação 2:
> A partir do código fornecido, crie o arquivo `script-02.js` e realize o seguinte requisito:

Requisito 1 - Crie uma função que retorne um objeto no formato `{ nomeCompleto, email }` representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF `newEmployees` para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato `nome_da_pessoa@trybe.com`.

```
const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
```

 
####  Atividade de fixação 3:
> Crie o arquivo `script-03.js` e realize o seguinte requisito:

Requisito 1 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


####  Atividade de fixação 4:
> Crie o arquivo `script-04.js` e realize o seguinte requisito:

Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

* Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

Array das respostas corretas e do aluno:
```
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
```

####  Atividade de fixação 5:
> Crie o arquivo `script-05.js` e realize o seguinte requisito:

Para os próximos exercícios copie o código abaixo.

```
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
```

##### Parte 1: 

Consiste na criação de funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

Requisito 1 - Crie uma função que retorna o dano do dragão.

* O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo `strength` (dano máximo).

Requisito 2 - Crie uma função que retorna o dano causado pelo warrior.

* O dano será um número aleatório entre o valor do atributo `strength` (dano mínimo) e o valor de `strength * weaponDmg` (dano máximo).


Requisito 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

* O dano será um número aleatório entre o valor do atributo `intelligence` (dano mínimo) e o valor de `intelligence * 2` (dano máximo).

A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

##### Parte 2: 

Agora que você já possui a implementação das funções relativas aos requisitos anteriores, passe-as como parâmetro para outras funções que irão compor um objeto `gameActions`. O objeto será composto por ações do jogo e cada ação é por definição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.

```
const gameActions = {
  // Crie as HOFs neste objeto.
};
```

Requisito 4 - Crie a primeira HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os `healthPoints` do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

Requisito 5 - Crie a segunda HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os `healthPoints` do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

Requisito 6 - Crie a terceira HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os `healthPoints` dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

Requisito 7 - Adicione ao objeto `gameActions` uma função que retorne o objeto `battleMembers` atualizado e faça um `console.log` para visualizar o resultado final do turno.


