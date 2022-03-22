// URL contendo a API  
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }; // objeto contendo as informações sobre requisição de API (presente na documentação)

  // Resolução baseada no gabarito da trybe presente no course
  // source: https://app.betrybe.com/course/fundamentals/javascript-e-testes-assincronos/javascript-assincrono-fetch-api-e-asyncawait-gabarito/solutions/9fcb5438-1f4a-4820-93e6-b7627784dd2e/conteudo/06007a39-c333-4ed6-8918-841c44c5df00?use_case=calendar
  fetch(API_URL, myObject)
    .then(response => response.json()) // converte o conteúdo, retornando um JSON contendo as informações da piada
    .then(data => document.getElementById('jokeContainer').innerHTML = data.joke); // then capaz de manipular dos dados recebidos no them acima, neste caso atriu o data.joke no h2 da página web criada
};

window.onload = () => fetchJoke();
