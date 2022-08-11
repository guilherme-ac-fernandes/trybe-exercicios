const MoviesModel = require('../models/movieModel');

const validateTitle = (title) => (title && typeof title === 'string');
const validateReleaseYear = (releaseYear) => (releaseYear && typeof releaseYear === 'number');
const validateDirectedBy = (directedBy) => (directedBy && typeof directedBy === 'string');
const validateIdMovie = (id) => (id && !isNaN(Number(id)));

const isValid = (title, directedBy, releaseYear) => {
  const isValidTitle = validateTitle(title);
  const isValidReleaseYear = validateReleaseYear(releaseYear);
  const isValidDirectedBy = validateDirectedBy(directedBy);
  if (!isValidTitle || !isValidReleaseYear || !isValidDirectedBy) return false;
  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);
  if (!isMovieValid) return false;
  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });
  return { id };
};

const findById = async (idMovie) => {
  if (!validateIdMovie(idMovie)) return false;
  const movie = await MoviesModel.findById(idMovie);
  return movie;
}

module.exports = {
  create,
  findById,
};
