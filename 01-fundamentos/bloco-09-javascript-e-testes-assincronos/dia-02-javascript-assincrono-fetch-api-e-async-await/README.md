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

