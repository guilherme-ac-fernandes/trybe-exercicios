const express = require('express');
const axios = require('axios');

// Middleware
const authentication = require('./middleware/authentication');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({
  message: 'Tudo ok',
}));

app.use(authentication)

// Utilização do axios proveniente da página do Flavio Copes
// link: https://flaviocopes.com/node-axios/
app.get('/btc/price', async (_req, res) => {
  try {
    const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
    const { data } = await axios.get(URL);

    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }

});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});