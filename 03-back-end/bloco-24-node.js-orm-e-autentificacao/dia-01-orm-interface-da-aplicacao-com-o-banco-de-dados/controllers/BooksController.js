const rescue = require('express-rescue');
const BooksService = require('../services/BooksService');

const getAll = rescue(async (_req, res) => {
  const books = await BooksService.getAll();
  if (!books || books.length === 0) {
    return res.status(404).json({ message: 'Books not found' });
  }
  return res.status(200).json(books);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const book = await BooksService.getById(id);
  if (!book || book.length === 0) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.status(200).json(book);
});

const create = rescue(async (req, res) => {
  const newBook = await BooksService.create(req.body);
  return res.status(201).json(newBook);
});

module.exports = {
  getAll,
  getById,
  create,
};