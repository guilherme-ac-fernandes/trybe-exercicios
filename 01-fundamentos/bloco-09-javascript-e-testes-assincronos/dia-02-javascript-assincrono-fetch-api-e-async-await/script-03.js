const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

// Resolução baseada no gabarito do course da Trybe (utilização de await em variáveis para retornar as informações obtidas anteriormente; forma de manipular a url da segunda API referente a currency e sua devida manipulação)
// source: https://app.betrybe.com/course/fundamentals/javascript-e-testes-assincronos/javascript-assincrono-fetch-api-e-asyncawait-gabarito/solutions/9fcb5438-1f4a-4820-93e6-b7627784dd2e/conteudo/06007a39-c333-4ed6-8918-841c44c5df00?use_case=calendar
const fetchCurrency = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint); // Junta as urls acima

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd) // Pega as informações apenas de dolars
    .catch((error) => error.toString());

  return usdCurrencies;
}

const setCoins = async () => {
  const coins = await fetchCoins();
  const currency = await fetchCurrency(); // currency.brl refere a dollar para real

  // Resolução baseada no exercício anterior 
  const list = document.getElementById('coinContainer');

  const filter = coins.filter((_, index) => index < 10); // Não preciso do element (Notação vista no gabarito da Trybe - source já informado acima)
  filter.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.name} (${element.symbol}): ${(parseFloat(element.priceUsd) * currency.brl).toFixed(2)}`;
    list.appendChild(li);
  })
}

window.onload = () => setCoins();
