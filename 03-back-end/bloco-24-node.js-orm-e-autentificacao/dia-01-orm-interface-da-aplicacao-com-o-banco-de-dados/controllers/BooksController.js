const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const books = await BooksService.getAll();
  if (!books || books.length === 0) {
    return res.status(404).json({ message: 'Livros não encontrados' });
  }
  return res.status(200).json(books);
};

module.exports = {
  getAll,
};