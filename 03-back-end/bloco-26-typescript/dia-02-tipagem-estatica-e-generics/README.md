###  Tipagem Estática e Generics
> Realize os seguintes comandos para iniciar os requisitos:

```
npm init -y

npm install -D @tsconfig/node16 @types/node typescript

touch tsconfig.json

```

```
// ./tsconfig.json
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
  },
}
```


####  Atividade de fixação:

> Crie o arquivo `Car.ts` e uma pasta `./enum` para auxiliar na criação dos `enum’s`.

Requisito 1 - Crie uma classe Car cujo objeto representará um carro.

**Propriedades:**

* Deve conter uma propriedade do tipo `string` chamada `brand` que representa a marca.

* Deve conter uma propriedade do tipo `enum` chamada `color` que representa a cor.

* A cor pode ser: preta, branca, vermelha ou prata.

* Deve conter uma propriedade do tipo `number` chamada `doors` que representa a quantidade de portas.


**Comportamentos:**

* Deve possuir um método chamado `honk` que aciona a buzina do carro.

* Deve possuir um método chamado `openTheDoor` que recebe como parâmetro uma porta do tipo `enum` e abre.

* Deve possuir um método chamado `closeTheDoor` que recebe como parâmetro uma porta do tipo `enum` e fecha.

* Deve possuir um método chamado `turnOn` que liga o carro.

* Deve possuir um método chamado `turnOff` que desliga o carro.

* Deve possuir um método chamado `speedUp` que acelera o carro.

* Deve possuir um método chamado `speedDown` que reduz a velocidade do carro.

* Deve possuir um método chamado `stop` que para o carro.

* Deve possuir um método chamado `turn` que recebe uma direção do tipo enum e vira o carro.


> Crie o arquivo `Gol.ts`.

Requisito 2 - Vamos agora utilizar a classe `Car` que criamos no requisito anterior. Uma pessoa motorista de aplicativo fará uma viagem para pegar sua nova pessoa passageira. Ela então entra em seu `volkswagen gol prata` de `4 portas`, liga seu carro e começa o trajeto:

* Siga em frente;

* Em 600 metros vire a esquerda;

* Vire a esquerda;

* Em 200 metros na rotatória pegue a segunda saída a direita;

* Mantenha em frente pelos próximos 1,2 quilômetros;

* Em 300 metros vire a direita;

* Vire a direita;

* Em 400 metros você chegará ao seu destino;

* Você chegou ao seu destino.

Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.

* Siga em frente;

* Em 300 metros vire a direita;

* Vire a direita;

* Mantenha em frente pelos próximos 2 quilômetros;

* Em 200 metros vire a esquerda;

* Vire a esquerda;

* Em 400 metros vire a direita;

* Vire a direita;

* Em 100 metros você chegará ao destino.

* Você chegou ao destino.

A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.

Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.




