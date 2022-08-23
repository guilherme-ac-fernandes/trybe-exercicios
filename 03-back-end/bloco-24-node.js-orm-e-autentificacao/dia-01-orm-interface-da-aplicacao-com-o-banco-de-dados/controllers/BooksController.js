const rescue = require('express-rescue');
const BooksService = require('../services/BooksService');

const getAll = rescue(async (req, res) => {
  // http://localhost:3001/books?author=J.K. Rowling
  const { author } = req.query; 
  let books;
  if (author) {
    books = await BooksService.getByAuthor(author);
  } else {
    books = await BooksService.getAll();
  }
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
  const { title, author, pageQuantity, publisher } = req.body;
  const newBook = await BooksService.create({
    title, author, pageQuantity, publisher,
  });
  return res.status(201).json(newBook);
});

const update = rescue(async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  const updateBook = await BooksService.update(id, {
    title, author, pageQuantity, publisher,
  });
  if (!updateBook) {
    return res.status(404).json({ message: 'Book not found!' });
  }
  return res.status(201).json({ message: 'Book updated!' });
});

const remove = rescue(async (req, res) => {
  const { id } = req.params;
  const removeBook = await BooksService.remove(id);
  if (!removeBook) {
    return res.status(404).json({ message: 'Book not found!' });
  }
  return res.status(200).json({ message: 'Book removed!' });
});

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};