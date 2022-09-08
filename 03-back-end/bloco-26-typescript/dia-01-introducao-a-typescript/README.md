###  Introdução ao TypeScript
> Realize os seguintes comandos para iniciar os requisitos:

```
npm init -y

npm install -D @tsconfig/node16 @types/node typescript

touch tsconfig.json

```

```
// ./tsconfig.json
{
  "extends": "@tsconfig/node16/tsconfig.json", // estendemos a configuração base para o Node 16
  "compilerOptions": {
    "outDir": "./dist", // pasta onde nossos arquivos compilados serão salvos
  },
}
```


####  Atividade de fixação:

> Crie o arquivo `Character.ts`
Requisito 1 - Temos um array `characters` que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo `Character` e da função usada para imprimir as informações básicas de todos os jogadores.

```
type Character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```

> Crie o arquivo `Months.ts`
Requisito 2 - Crie uma `enum` que represente os meses do ano.


> Crie o arquivo `Seasons.ts`
Requisito 3 - Crie uma `enum` que represente as estações climáticas do ano.


> Crie o arquivo `index.ts`
Requisito 4 - Utilizando as `enums` criadas nos exercícios anteriores e o pacote `readline-sync`, que cria uma interface para ler o que for inserido no console, crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:

* Retorne em que estação aquele mês se encontra.

* Caso seja um mês que possua duas estações retorne ambas.

* Estações do ano no Hemisfério Norte:

| Estação | Início | Término |
|---|---|---|
| Outono | 23 de setembro | 21 de dezembro |
| Inverno | 21 de dezembro | 20 de março |
| Primavera | 20 de março | 21 de junho |
| Verão | 21 de junho | 23 de setembro |

* Estações do ano no Hemisfério Sul:

| Estação | Início | Término |
|---|---|---|
| Outono | 20 de março | 21 de junho |
| Inverno | 21 de junho | 22 de setembro |
| Primavera | 22 de setembro | 21 de dezembro |
| Verão | 21 de dezembro | 20 de março |

