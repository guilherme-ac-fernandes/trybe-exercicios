// Resolução baseada no gabarito no course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-camada-de-servico-e-arquitetura-rest-e-restful/arquitetura-de-software-camada-de-model-gabarito/solutions/49f1b0c1-ad03-4f1f-baa7-1dd063d28ea1/conteudos/78846e40-4640-48ab-9675-4043ce9f852a?use_case=calendar

const express = require('express');
const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
	  return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// Solução com rotas diferentes
// app.get('/books', async (_req, res) => {
//   const allBooks = await Books.getAll();
// 	res.status(200).json(allBooks);
// });

// app.get('/books/author/:id', async (req, res) => {
//   const { id } = req.params;
//   const allAuthorBooks = await Books.getByAuthorId(id);
//   res.status(200).json(allAuthorBooks);
// });

app.get('/books', async (req, res) => {
  const { id } = req.query;
  const books = (id)
  ? await Books.getByAuthorId(id)
  : await Books.getAll();
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.findById(id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!await Books.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Books.create(title, author_id);
  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
