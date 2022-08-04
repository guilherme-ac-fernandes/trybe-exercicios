// Resolução proveniente do gabarito no course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/atividades-solucoes-propostas/solutions/24c41754-4ce1-4b52-931a-56a736e56587/solucoes-propostas-das-atividades/e772825b-3445-4443-a197-39b8b52e4f3d?use_case=calendar

const express = require('express');

// Middleware
const routerNotFound = require('./middleware/routerNotFound');

const app = express();
app.use(express.json());

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol!' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
];

app.get('/posts', (_req, res, next) => {
  try {
    if (!posts || posts.length === 0) {
      return res.status(200).json({ posts: [] });
    }
    return res.status(200).json(posts);
  } catch (error) {
    return next({ statusCode: 500, message: 'Erro do Servidor' });
  }
  
});


app.get('/posts/:id', (req, res, next) => {
  const { id } = req.params;
  
  const post = posts.find((p) => Number(p.id) === Number(id));
  if (!post) {
    return next({ statusCode: 404, message: 'post not found' }); 
  }
  return res.status(200).json(post);
});

app.use('*', (_req, _res, next) => next({
  statusCode: 404,
  message: 'Opsss router not found',
}));
app.use(routerNotFound);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});