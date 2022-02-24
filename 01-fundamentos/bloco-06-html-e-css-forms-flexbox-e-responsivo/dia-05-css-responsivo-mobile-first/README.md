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


#### Atividade de fixação 3:
> Utilizando os arquivos `index-03.html` e `style-03.css` fornecidos, realize as seguintes modificações:

Requisito 1 - Utilizando a abordagem **mobile first** e `media queries`, crie três versões de layout diferentes para essa página. Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande). Faça pelo menos um `commit para cada layout ;
 
Observação 1: Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:

* Onde a lista de capítulos deve estar posicionada?
* Como a história deve ser mostrada?
* Como o cabeçalho deve ser posicionado?
* O que fazer com as informações do autor em cada tamanho de tela?

Observação 2: Talvez você precise alterar o HTML um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.


#### Atividade de fixação 4:
> Utilizando os arquivos `index-04.html` e `style-04.css` fornecidos, realize as seguintes modificações:

* O objetivo deste exercício é usar `media queries` para fazer a página acima parecer diferente na hora da impressão e em diferentes tamanhos de tela.

Requisito 1 -  Adicione uma `media query` no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa.

> Especificamente:
> Os elementos com id `header`, `navigation` e `footer` devem desaparecer.
> O elemento com id `aside` deve ser mostrado abaixo do conteúdo principal.

Visualização da página antes da impressão
![Visualização da página antes da impressão](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/css-responsive/images/exercise_3_before_print-2d4180a7f515daebab4ee1c78fe51cfd.png)



Requisito 2 -  Adicione uma `media query` no arquivo CSS e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. 

> Especificamente:
> O elemento com id `aside` deve desaparecer.
> O elemento `body` não deve ter padding.
> As imagens não devem exceder a largura da tela.
> Os itens dentro do elemento `navigation` devem aparecer cada um em sua própria linha.
> O elemento com id `header` deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo após o usuário rolar a página.

Tela do Smartphone 360X640
![Tela do Smartphone 360X640](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/css-responsive/images/exercise_3_before_android-a59ce8b1d1a965e51c661e0999db28bb.png)


