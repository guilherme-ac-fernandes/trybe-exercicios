const fs = require('fs/promises');
const path = require('path');

const USERS_FILE = path.join(__dirname, 'data', 'users.json');

const getAll = async () => fs.readFile(USERS_FILE, 'utf-8').then(JSON.parse);

const writeAll = async (content) =>
  fs.writeFile(USERS_FILE, JSON.stringify(content, null, 2));

const findOne = (username) =>
  getAll().then((users) => users.find((user) => user.username === username));

const create = (username, password, admin) =>
  getAll()
    .then((users) => {
      users.push({ username, password, admin });
      return users;
    })
    .then(writeAll);

module.exports = {
  getAll,
  findOne,
  create,
};