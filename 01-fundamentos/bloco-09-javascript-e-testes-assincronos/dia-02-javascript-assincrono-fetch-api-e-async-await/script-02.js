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
}

window.onload = () => fetchCoins();