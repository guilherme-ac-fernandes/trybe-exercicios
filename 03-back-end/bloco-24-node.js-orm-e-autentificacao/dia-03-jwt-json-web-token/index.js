// Resolução proveniente do gabarito presente no course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/nodejs-jwt-json-web-token-gabarito/solutions/553b9052-a328-4cf9-9e64-27b03709fb2a/gabarito-dos-exercicios/eb2792d0-de58-45f8-a57c-6c7185627d6f?use_case=calendar

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/ping', controllers.ping);
app.post('/login', controllers.login);
app.get('/users/me', middlewares.auth, controllers.me);
app.get('/top-secret',
  middlewares.auth,
  middlewares.isAdmin,
  controllers.topSecret,
);
app.post('/signup', controllers.signup);


app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
