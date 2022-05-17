

###  Atividade de fixação 3:
> Crie a pasta `exercise-03` e realize o seguinte requisito:

O Reddit é uma comunidade na qual pessoas conseguem criar grupos de discussão acerca de algum assunto. Tal grupo é chamado de `subreddit`. Para cada `subreddit` pessoas podem fazer postagens. Como exercício, você vai fazer uma aplicação que permite a quem usá-la ver posts referentes a 2 `subreddits`:

1. reactjs

2. frontend

Sua aplicação deve permitir a quem usá-la poder escolher de qual `subreddit` se deseja ver as postagens. No momento que selecionar o `subreddit`, uma requisição precisa ser feita no `reddit` para buscar os posts referentes ao `subreddit` escolhido. Para cada postagem você precisa mostrar pelo menos o título do post. Além disso, sua aplicação deve permitir a quem usá-la a possibilidade de atualizar a lista de postagens referentes ao `subreddit` escolhido.

É obrigatório que você gerencie o estado de sua aplicação com `Redux`, guardando os `subreddits`, assim como os posts de cada `subreddit`, no store. Você precisa fazer uso do `redux-thunk` para permitir criar `actions` assíncronas.

Pontos importantes:

Requisito 1 -  Para buscar os posts referentes a um `subreddit`, você pode fazer uma requisição GET para `https://www.reddit.com/r/<subreddit>.json`. Ou seja, se você precisar buscar posts do `subreddit` `reactjs`, você faria uma chamada para `https://www.reddit.com/r/reactjs.json`.

Requisito 2 - No `json` retornado você encontra os dados referentes aos posts dentro da propriedade `data.children`. Para cada post dentro de `data.children` você encontra seu título correspondente na propriedade `data.title`.

> Observação: Antes de começar a sair implementando, pare e pense sobre como desenhar o estado da sua aplicação. O que você precisa guardar no estado? Como você vai estruturar e organizar seus dados? Quais `actions` você precisa ter para modelar os eventos que ocorrerão na sua aplicação (fazer uma requisição, obter sua resposta, atualizar a lista, etc...)? Como você vai organizar seus `reducers` (lembrando que NUNCA deve-se alterar o estado, e sim criar um novo)?



