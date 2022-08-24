const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const validateJWT = require('../auth/validateJWT');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', validateJWT, routes.getPosts);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);
apiRoutes.get('/api/users/:userId', validateJWT, routes.getUserById);

app.use(apiRoutes);

/*
    Detalhe para a exportação do `app`, já que
    precisaremos dele nos testes com `chaiHttp` e
    para rodar nosso `server.js`
*/
module.exports = app;