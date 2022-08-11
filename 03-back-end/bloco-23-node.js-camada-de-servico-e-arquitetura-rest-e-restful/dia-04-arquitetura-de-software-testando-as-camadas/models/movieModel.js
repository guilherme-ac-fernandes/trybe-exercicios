const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const query = `
    INSERT INTO model_example.movies (title, directed_by, release_year)
    VALUES (?, ?, ?)
  `;
  const [result] = await connection.execute(query, [title, directedBy, releaseYear] );
  return { id: result.insertId };
};

const findById = async (idMovie) => {
  const query = `
    SELECT id, title, directed_by, release_year
    FROM model_example.movies
    WHERE id = ?
  `;
  const [movie] = await connection.execute(query, [idMovie]);
  if (movie.length === 0) return null;

  const {
    title,
    directed_by: directedBy,
    release_year: releaseYear,
  } = movie[0];
  return {
    id: idMovie,
    title,
    directedBy,
    releaseYear,
  };
}

module.exports = {
  create,
  findById,
};