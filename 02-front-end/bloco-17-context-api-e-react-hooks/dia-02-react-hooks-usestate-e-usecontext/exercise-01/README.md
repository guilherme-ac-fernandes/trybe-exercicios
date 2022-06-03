## Gerenciamente de estados complexos com Context API e React Hooks


### Para fazer um fork

**1 - Clique no botão "Fork" do repositório.**

![passo2](images/fork-step-1.png)

**2 - Selecione seu usuário do GitHub.**

![passo3](images/fork-step-2.png)

**3 - Escolha a URL remota (SSH, HTTPS) para fazer o clone do repositório.**

![passo4](images/fork-step-3.png)


### Instruções


Hoje você trabalhará com o melhor aplicativo no ramo de entrega de comida de toda a internet, o try-food.
No momento precisamos melhorar essa aplicação e centralizar os estados que são utilizados por vários componentes em um contexto. Performance é muito importante e a manutenção do código deve ser feita da melhor maneira possível.
A equipe de engenharia começou a migrar tudo para Context API mas eles pararam para almoçar e você, que sabe que falta pouca coisa para fazer a aplicação funcionar, decidiu terminar a última função e colaborar com o resultado da equipe.

Você receberá um código que simula essa aplicação e precisará completar esse código para ver a aplicação em funcionamento. A parte mais importante é treinar manipulação de estados dentro do arquivo **src/context/MyProvider.js**, onde a função **handleChange** está vazia. Devido a função handleChange estar vazia, sua aplicação estará quebrada, e portanto, a página Order.js não está recebendo o MyProvider.js com os estados da aplicação, fazendo com sua ramificação (filhos) também não receba o contexto com os estados.

***Dica: Header.js, Cart.js e Options.js são componentes renderizados pela página Order.js e todos utilizam o contexto da aplicação***

Analise o código da aplicação e pense como atualizar individualmente a lista de **comida, bebida** e **sobremesa**, que são arrays contidos no objeto **orderList**.

#### Esquema de pastas e arquivos
![esquema](images/schema.png)

- **try-food:** Diretório com toda a aplicação.
- **src:** Diretório que contém seu código JavaScript, JSX.
- **components:** Diretório que contém os componentes utilizados na aplicação.
- **context:** Diretório que contém o contexto da aplicação e o provedor de estados da sua aplicação.
- **pages:** Diretório que contém as páginas da aplicação, ou seja, as páginas configuradas por rotas.
- **index.js:** Arquivo que trata de encontrar o arquivo raiz da aplicação e implementa o código React nele. O index.js importa a biblioteca react-dom e contém o BrowserRouter, que realiza a implementação de rotas para navegadores HTML5 e informa a aplicação que teremos roteamento de componentes a partir daquele ponto. Esta implementação encapsula App.js.
- **App.js:** Arquivo que representa o elemento raiz da aplicação, a partir dele haverá ramificações. Esta implementação encapsula Routes.js.
- **Routes.js:** Arquivo que centraliza todas as rotas da aplicação (boa prática).

##### Dentro da master

```javascript
cd try-food
npm install
npm start
```

##### Dicas importantes:

- Pense em três condições: (1 - Não há o item na lista; 2 - Há o item na lista; 3 - A quantidade do item na lista passou a ser zero (0));
- A lista de comidas, bebidas e sobresas são exibidas individualmente;
- O uso do spread (...) pode te ajudar nas lógicas que acrescentam posições no array (sem substituir;
- A função handleChange recebe informações do componente **src/components/Options.js**, que é um filho da página **src/pages/Order.js**;
- Você precisará do Hook useState para essa função.

#### Baby steps:

1. Vamos entender a estrutura do Provider em nossa aplicação. No início temos dois estados, certo? Primeiramente precisamos refletir sobre alguns pontos: O que o estado precisará conter? Quais acões ele precisará controlar? Dê uma lida nas **dicas importantes** e pense com calma!
Pensamos em duas chaves para nosso estado! A primeira receberá separadamente os dados de "comida", "bebida" e "sobremesa" em um array, e a segunda controlará o componente Header: se seu valor for false, o Header terá um botão com o texto *'Ver opções'*, do contrário o texto será *'Ver sacola'*. Para controlar a lógica desse estado, implementamos a função **showCart()**.

2. Beleza então, temos a base do nosso estado. Agora vamos interagir com ele. Para controlar a lógica do nosso Header, por exemplo, precisaremos de uma função que gerenciará as mudanças de estado através das interações no componente filho **"Options.js"**, para que o componente filho **"Cart.js"** sempre atualize o pedido do cliente. **Options.js** deverá receber a função **handleChange**, e toda vez que um usuário modificar a quantidade de um produto em **"Options.js"**, devem ser retornadas as informações **"event, name, price, e mealType"** necessárias para essa função.

3. Nossa função precisa extrair a quantidade do produto utilizando o **"event"** que foi retornado. Como podemos fazer isso? Podemos utilizar o **event.target.value** e definir um novo objeto com a quantidade atualizada desse produto.

4. No que devemos pensar agora? Precisamos verificar se o item que criamos está presente em uma das 3 listas contidas no objeto que é o nosso estado. Você consegue pensar em uma maneira de fazer essa verificação em apenas uma linha? Tente fazer a sua lógica funcionar. Conseguiu? Vamos lembrar de um conceito aprendido lá em fundamentos do desenvolvimento web.

    - Você se lembra que, para acessar uma chave dinâmica de um objeto, podemos passar essa chave através de `[]` (colchetes)? Nós recebemos nessa função o **"mealType"** *(ou ItemType)*, e podemos realizar essa verificação dinamicamente se passarmos essa informação para o **"orderList"**, que é o nosso objeto que contém as chaves **(itemType)** e suas respectivas listas como valores. *Se quisermos descobrir se há algum objeto nas listas igual ao nosso **newItem**, podemos utilizar a função **some**, e comparar se o **item.id** equivale ao nome do item retornado*.
5. Se não houver o item na lista, devemos adicionar um item na lista com a função **addItemToList**, passando *newItem* como parâmetro. Se já houver o item na lista, devemos atualizá-lo com a função **manageItemsInList** passando *newItem* como parâmetro.

    Vamos pensar um pouco! 🤔
    - No passo anterior nós verificamos se o produto já existe na lista, certo? Então agora podemos utilizar o retorno dessa função para adicionar um novo produto na lista, ou atualizar um produto que já existe na lista. Como você faria essa lógica? Você pode quebrar sua função em funções menores que gerenciarão essas modificações para deixar o seu código mais limpo.
6. Como você faria para apenas adicionar um novo item na lista? Nossa função recebe o objeto que criamos e atualiza o nosso estado. Lembre-se: Precisamos atualizar a chave correspondente do nosso estado, e para isso podemos utilizar o **itemType** do nosso objeto e fazer isso dinamicamente.

    Como podemos começar?🤔

    - Vamos brincar com o *spread*! Podemos utilizar a função *setOrderList({**...orderlist**, [newItem.itemType]: "aqui entra a lógica necessária para atualizar a lista" })*.
    Primeiro nós retornamos todo o objeto orderList, e depois passamos a chave que queremos atualizar, essa chave é o **newItem.itemType** que passamos para essa função.
    E qual o valor que demos passar para essa chave? Tente desenvolver a lógica e lembre-se que a chave já possui diversos valores, então devemos fazer o **spread** para recuperar seu conteúdo e, só então, **adicionar o novo item**.
7. E agora? Se você incrementar o valor de um produto, ele deve ser atualizado, mas e se você retornar o valor desse produto para 0 (zero)? Como você faria para tratar essa condição? Tente desenvolver essa lógica e lembre-se que nós temos duas missões: a primeira missão é verificar se devemos remover o item da lista caso o usuário mude a quantidade dele para 0 e chamar a função responsável por essa atualização. A segunda missão é chamar a função que atualiza a quantidade do item, caso o valor seja diferente de 0. 

    **DICA!** 😉

    Caso prefira dividir sua lógica em outras funções, você deverá passar as informações: **orderState** que contém os valores da chave que deve ser atualizada, **indexPresentInList** que é o índice do item no array, e **newItem** que é o objeto a ser atualizado ou a chave do objeto a ser atualizado, caso acessado o *itemType*. Você pode ou não fazer a chamada de outras funções que realizarão essas modificações, fica a seu critério, mas lembre-se que uma função deve ter somente um objetivo, isso deixará seu código mais limpo e mais compreensível.
8. Finalmente estamos aqui e você precisa remover um item da lista, como você faria isso? Você já possui o array com os dados que serão atualizados no seu estado, o índice do elemento e a chave que você precisa acessar dentro do objeto, conseguiu pensar em uma lógica? Você pode utilizar o método **filter** ou o método **splice** por exemplo.

9. Se você chegou até aqui, você está no último passo da nossa lógica e agora só precisa se preocupar em realizar a atualização do produto na lista. Consegue pensar em uma lógica para isso? Uma maneira muito simples de fazer a atualização de um array é utilizando o **splice** *passando um terceiro parâmetro*, que indica o novo valor do item naquele índice, e então realizar novamente a atualização do estado com o **spread** de todo o objeto **orderList**, e com a chave e o valor a serem atualizados. Conseguiu realizar a lógica? É incrível o quanto aprendemos em pouco tempo, você está mais que preparado para o projeto desse bloco.

#### Gabarito
*O gabarito do exercício está na pasta **answer_keys** desse repositório.*
