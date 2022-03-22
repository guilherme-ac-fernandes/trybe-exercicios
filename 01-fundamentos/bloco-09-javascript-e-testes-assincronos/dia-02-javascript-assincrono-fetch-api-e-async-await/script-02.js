// Consulta a API contendo valores de crypto moedas
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Transforma o array vindo da API na string que necessito
      const dataString = data.data.map((element) => `${element.name} (${element.symbol}): ${parseFloat(element.priceUsd).toFixed(2)}`);
      // Dentro do forEach utilizo o index para controlar o número de informações adicionadas e adicionalas na ul presente na página HTML
      const list = document.getElementById('coinContainer');
      dataString.forEach((element, index) => {
        if (index < 10) {
          const li = document.createElement('li');
          li.innerHTML = element;
          list.appendChild(li);
        }
      })
    })
    .catch((error) => error.toString());
    // Erro toString proveniente do gabarito do course da tryber
    // source: https://app.betrybe.com/course/fundamentals/javascript-e-testes-assincronos/javascript-assincrono-fetch-api-e-asyncawait-gabarito/solutions/9fcb5438-1f4a-4820-93e6-b7627784dd2e/conteudo/06007a39-c333-4ed6-8918-841c44c5df00?use_case=calendar
}

window.onload = () => fetchCoins();