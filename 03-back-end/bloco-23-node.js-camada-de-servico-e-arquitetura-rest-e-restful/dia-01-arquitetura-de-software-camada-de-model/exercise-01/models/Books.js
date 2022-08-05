const connection = require('./connection');
const Author = require('./Author');

const serialize = (book) => ({
  id: book.id,
  title: book.title,
  authorId: book.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
  return books.map(serialize).filter((book) => Number(book.authorId) === Number(authorId));
};

const findById = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE id = ?'
  const [ bookData ] = await connection.execute(query, [id]);
  if (bookData.length === 0) return null;
  const data = bookData.map(serialize)[0];
  return { ...data, id };
};


const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;
  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};
