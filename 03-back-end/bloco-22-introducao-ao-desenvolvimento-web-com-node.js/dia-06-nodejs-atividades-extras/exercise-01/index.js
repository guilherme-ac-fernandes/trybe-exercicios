const express = require('express');
const registerRoute = require('./registerRoute');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ message: 'Tudo ok' }));

app.use('/user', registerRoute);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
