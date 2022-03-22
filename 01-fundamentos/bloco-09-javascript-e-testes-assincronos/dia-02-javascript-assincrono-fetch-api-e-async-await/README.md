## JavaScript Assíncrono - Fetch API e async/await

####  Atividade de fixação 1:
> Crie os arquivos `index-01.html` e `script-01.js`, faça modificações nos códigos fornecidos mediante necessidade:

Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! 

> No terminal: 
> Primeiro, veja o manual da API do site icanhazdadjoke.com. Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API:
> * Para começar, vamos fazer uma requisição via browser. Visite o site icanhazdadjoke.com, e perceba que ele devolve uma página HTML com uma piada aleatória.
> * Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/". Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
> * Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/". Veja que agora recebemos apenas a piada aleatória em formato texto.
> * Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/". Agora a API retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.

No Browser: 
Utilize o HTML e o JavaScript a seguir como base: 

```
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
    <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```  
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
```

Requisito 1 - Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!


####  Atividade de fixação 2:
> Crie os arquivos `index-02.html` e `script-02.js`,  e realize o seguintes requisitos:

> Agora que tal um exercício menos guiado? Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.
>
> A documentação para a API que vamos utilizar esta disponível nesse https://docs.coincap.io.
>
> Tente descobrir qual url vamos utilizar para buscar as informações que precisamos (um array com uma listagem das crypto moedas).
>
> Se ficou na dúvida veja a seguir (spoiler alert!)
>
> ```
> url: `https://api.coincap.io/v2/assets`
> ```

Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro: `FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0`, significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.

Requisito 1 - Agora que temos a url e crie a uma função para pegar o array com as moedas.

Requisito 2 - No arquivo HTML deve conter uma tag para listar as crypto moedas.

Requisito 3 - Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas sejam apresentadas na tela. Utilize o seguinte formato: `Nome da moeda (símbolo da moeda): valor em dólares`. Exemplo: Bitcoin (BTC): 46785.06.

Requisito 4 - Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?

Requisito 5 - Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).



####  Atividade de fixação 3:
> A partir do código do exercício anterior, crie os arquivos `index-03.html` e `script-03.js`,  e realize o seguinte requisito:

Requisito 1 - Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?
Para este exercício vamos utilizar a Currency API. Tente descobrir qual url retorna os dados necessários para este exercício, mas caso fique na dúvida pode consultar a informação abaixo:

> URL (spoiler alert!)
> ```
> baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`  
> endpoint: `/currencies/usd.min.json`
> ```


