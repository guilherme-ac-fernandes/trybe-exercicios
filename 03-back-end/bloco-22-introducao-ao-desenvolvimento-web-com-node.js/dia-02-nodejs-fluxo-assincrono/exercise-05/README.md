###  Atividade de fixação 5:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote `Node.js` com o `npm init` chamado `exercise-05`. Realize os exercícios dentro desse pacote:

Requisito 1 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

* Utilize o `Promise.all` para manipular vários arquivos ao mesmo tempo.

* Dado o seguinte `array` de `strings`: `[‘Finalmente', 'estou', 'usando', 'Promise.all', ‘!!!’]`. Faça com que sua função crie um arquivo contendo cada `string`, sendo o nome de cada arquivo igual a `file<index + 1>.txt`. Por exemplo, para a `string` `”Finalmente”`, o nome do arquivo é `file1.txt`.

* Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado `fileAll.txt`.

