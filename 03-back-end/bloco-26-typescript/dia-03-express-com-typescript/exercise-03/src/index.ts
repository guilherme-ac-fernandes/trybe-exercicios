// Resolução do exercício proveniente do course da Trybe presente no repositório
// source: https://github.com/tryber/praticando-typescript-express/tree/main/atividade-3

import express from 'express';

import router from './routes/routes';

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());

app.use('/products', router);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
