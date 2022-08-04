const fs = require('fs/promises');

const TEAMS_FILE = './teams.json';

const getTeams = () => fs.readFile(TEAMS_FILE, 'utf-8').then((content) => JSON.parse(content));
const writeTeams = (data) => fs.writeFile(TEAMS_FILE, JSON.stringify(data, null, 2));

module.exports = { getTeams, writeTeams };
