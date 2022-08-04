// Resolução proveniente do gabarito no course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/atividades-solucoes-propostas/solutions/24c41754-4ce1-4b52-931a-56a736e56587/solucoes-propostas-das-atividades/e772825b-3445-4443-a197-39b8b52e4f3d?use_case=calendar

const express = require('express');
const fs = require('fs/promises');
const { getTeams, writeTeams } = require('./fs-utils');

// Middleware
const routerNotFound = require('./middleware/routerNotFound');

const app = express();
app.use(express.json());


app.post('/teams', async (req, res, next) => {
  const { name, initials, country, league } = req.body;

  if (!name || name.length < 6) {
    return next({ statusCode: 400, message: 'invalid data' }); 
  }

  // Regex utilizado para validação de apenas letras maiúsculas
  // source: https://www.codegrepper.com/code-examples/javascript/regex+only+uppercase+letters+js
  if (!initials || (initials.length < 4 && !initials.match(/^[A-Z]*$/))) {
    return next({ statusCode: 400, message: 'invalid data' }); 
  }

  if (!country || country.length < 4) {
    return next({ statusCode: 400, message: 'invalid data' }); 
  }

  const teams = await getTeams();
  const newTeam = { name, initials, country, league };
  teams.push(newTeam);

  await writeTeams(teams);

  return res.status(200).json(newTeam);
});

app.get('/teams', async (_req, res, next) => {
  try {
    const teams = await getTeams();
    if (!teams || teams.length === 0) {
      return res.status(200).json({ teams: [] });
    }
    return res.status(200).json(teams);
  } catch (error) {
    return next({ statusCode: 500, message: 'Erro do Servidor' });
  }
});

app.use('*', (_req, _res, next) => next({
  statusCode: 404,
  message: 'Opsss router not found',
}));
app.use(routerNotFound);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});