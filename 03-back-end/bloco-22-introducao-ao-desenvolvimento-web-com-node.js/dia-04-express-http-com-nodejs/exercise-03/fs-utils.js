const fs = require('fs/promises');

const SIMPSONS_FILE = './simpsons.json';

const getSimpsons = () => {
  return fs.readFile(SIMPSONS_FILE, 'utf-8')
    .then((content) => JSON.parse(content));
}

const setSimpsons = async (data) => {
  return await fs.writeFile(SIMPSONS_FILE, JSON.stringify(data, null, 2));
}

module.exports = { getSimpsons, setSimpsons };