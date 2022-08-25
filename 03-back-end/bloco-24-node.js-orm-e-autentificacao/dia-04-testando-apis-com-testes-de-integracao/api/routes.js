const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const getUsers = require('../controllers/getUsers');
const getUserById = require('../controllers/getUserById'); 

module.exports = {
  getPosts,
  createUsers,
  getUsers,
  login,
  getUserById,
};
