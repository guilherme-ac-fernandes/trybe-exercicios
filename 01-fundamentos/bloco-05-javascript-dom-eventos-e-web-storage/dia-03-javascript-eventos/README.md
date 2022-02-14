## JavaScript - Eventos


#### Atividade de fixação 1:
> A partir dos códigos fornecidos crie `index-01.html`, `style-01.css` e `script-01.js`, para realizar as seguintes modificações utilize apenas o Javascript:

1. Copie esse arquivo e edite apenas ele.
> 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
> 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

2. Crie uma função que adicione a classe `tech` ao elemento `li` quando for clicado.
> 2.1. Deve existir apenas um elemento com a classe `tech`. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe `tech`.

4. Crie uma função que, ao clicar duas vezes em `Meu top 3 do Spotrybefy`, ele redirecione para alguma página.
> 4.1. Que tal redirecionar para seu portfólio?

5. Crie uma função que, ao passar o mouse sobre `Meu top 3 do Spotrybefy`, altere a cor do mesmo.


#### Atividade de fixação 2:
> A partir dos códigos fornecidos crie `index-02.html`, `style-02.css` e `script-02.js`, para realizar as seguintes modificações utilize apenas o Javascript:


Requisito 1 - O array `dezDaysList` contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag `<ul>` com ID `days`. Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

* Os dias devem estar contidos em uma tag `<li>`, e todos devem ter a classe `day`. Ex: `<li class="day">3</li>`.

* Os dias 24, 25 e 31 são feriados e, além da classe `day`, devem conter também a classe `holiday`. Ex: `<li class="day holiday">24</li>`.

* Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe `day` e a classe `friday`. Ex: `<li class="day friday">4</li>`.

`const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]`


Requisito 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome “Feriados”.

* Adicione a este botão a ID `btn-holiday`.

* Adicione este botão como filho/filha da tag `<div>` com classe `buttons-container`.


Requisito 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe `holiday`.

* É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor `rgb(238,238,238)`.


Requisito 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

* Adicione a este botão o ID `btn-friday`.

* Adicione este botão como filho/filha da tag `<div>` com classe `buttons-container`.


Requisito 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

* É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.


Requisito 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.


Requisito 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag `<span>` contendo a tarefa.

* O elemento criado deverá ser adicionado como filho/filha da tag `<div>` que possui a classe `my-tasks`.


Requisito 8 -  Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag `<div>` com a classe `task`.

* O parâmetro cor deverá ser utilizado como cor de fundo da `<div>` criada.

* O elemento criado deverá ser adicionado como filho/filha da tag `<div>` que possui a classe `my-tasks`.


Requisito 9 - Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag `<div>` referente a cor da sua tarefa, atribua a este elemento a classe `task selected`, ou seja, quando sua tarefa possuir a classe `task selected`, ela estará selecionada.

* Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente `task`, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.


Requisito 10 - Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

* Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial `rgb(119,119,119).


Requisito 11 - Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

* Se nenhum caractere for inserido no campo `input`, a função deve retornar um `alert` com uma mensagem de erro ao clicar em "ADICIONAR".

* Ao pressionar a tecla "enter" o evento também deverá ser disparado.
