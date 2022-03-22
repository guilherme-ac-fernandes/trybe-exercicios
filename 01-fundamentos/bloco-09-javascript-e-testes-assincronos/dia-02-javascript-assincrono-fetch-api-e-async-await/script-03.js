const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}


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

  const list = document.getElementById('coinContainer');
  coins.forEach((element, index) => {
    if (index < 10) {
      const li = document.createElement('li');
      li.innerHTML = `${element.name} (${element.symbol}): ${(parseFloat(element.priceUsd) * currency.brl).toFixed(2)}`;
      list.appendChild(li);
    }
  })
}

window.onload = () => setCoins();
