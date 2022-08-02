const express = require('express');
const registerRoute = require('./registerRoute');

const app = express();
app.use(express.json());

app.use('/user', registerRoute);






app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});