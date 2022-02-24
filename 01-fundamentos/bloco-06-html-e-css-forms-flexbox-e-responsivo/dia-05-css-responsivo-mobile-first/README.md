## CSS Responsivo - Mobile First


#### Atividade de fixação 1:
> Utilizando os arquivos `index-01.html` e `style-01.css` fornecidos, realize as seguintes modificações:
> Observação: Para os seguintes exercícios você não precisará alterar o arquivo HTML, apenas o CSS.

Requisito 1 - A primeira div só poderá aparecer se nossa tela possuir **largura mínima de 500px**.

Requisito 2 - A segunda div só poderá aparecer apenas se a largura estiver **entre 600px e 1000px**.

Requisito 3 - A terceira div não deverá aparecer se nossa tela possuir largura **entre 650px e 950px**.

Requisito 4 - Sem alterar a classe `trick`, faça com que o texto dela apareça somente quando a tela estiver com **menos de 500px de largura**.


#### Atividade de fixação 2:
> Utilizando os arquivos `index-02.html` e `style-02.css` fornecidos, realize as seguintes modificações:

Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel e faça uma estilização visando essa utilização.

* Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais. Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido, ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra.

Agora você vai ajustar o CSS para melhorar a visualização da página, seguindo os requisitos:

Realize as seguintes tarefas:

Requisito 1 - Faça o tamanho da fonte ser maior.

Requisito 2 - Faça o tamanho da fonte dos elementos `h1` ser maior.

Requisito 3 - Aumente o espaçamento entre as figuras.

Requisito 4 - Adicione um pouco de `margin` na página.

Requisito 5 - Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px). Esse será o primeiro `breakpoint` do layout. 

Requisito 6 - Crie uma `media query` no seu arquivo CSS, usando a dimensão em pixels que você guardou como o `min-width`. Dentro desse breakpoint , adicione os seguintes ajustes:

* Ajuste o tamanho da fonte.
* Ajuste as margens da página.
* Faça as imagens serem mostradas em duas colunas.

Requisito 7 - Agora, você vai criar outro `breakpoint` para telas grandes. Redimensione sua tela de novo para encontrar um novo `breakpoint`.

Requisito 8 - Crie uma nova `media query` no seu arquivo CSS usando a dimensão que você encontrou para telas grandes, e realize os seguintes ajustes:

* Ajuste o tamanho da fonte.
* Ajuste as margens da página.
* Adicione a propriedade `max-width` à página, para garantir que a largura das linhas não fique muito grande.
