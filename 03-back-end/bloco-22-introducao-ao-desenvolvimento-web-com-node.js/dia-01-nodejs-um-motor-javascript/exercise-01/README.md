###  Atividade de fixação 1:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-01`. Realize os exercícios dentro desse pacote:

Requisito 1 - Crie um `script` para calcular o Índice de Massa Corporal (IMC) de uma pessoa.

* A fórmula para calcular o IMC é `peso / altura ^ 2`. Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.

* Comece criando um novo pacote node com `npm init` e respondendo às perguntas do `npm`.

* Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura.

* Armazene o script no arquivo `imc.js`.

Requisito 2 - Agora, permita que o `script` seja executado através do comando `npm run imc`.

* O novo `script` criado deve conter o comando que chama o `node` para executar o arquivo `imc.js`.

Requisito 3 - Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.

* Edite o código para que os valores de peso e altura sejam informados pela pessoa ao responder as perguntas `”Qual seu peso?”` e `“Qual sua altura?”` no terminal utilizando a `lib readline-sync`.

Requisito 4 - Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

* O pacote `readline-sync` possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats.

Requisito 5 - Vamos sofisticar um pouco mais nosso script. Além de imprimir o `IMC` na tela, imprima também em qual categoria da tabela abaixo aquele `IMC` se enquadra:
Considere a seguinte tabela para classificar a situação do `IMC`:

![Tabela de IMC](https://github.com/guilherme-ac-fernandes/trybe-exercicios/blob/exercicios/22.1/03-back-end/bloco-22-introducao-ao-desenvolvimento-web-com-node.js/dia-01-nodejs-um-motor-javascript/exercise-01/tabela-imc.png)


