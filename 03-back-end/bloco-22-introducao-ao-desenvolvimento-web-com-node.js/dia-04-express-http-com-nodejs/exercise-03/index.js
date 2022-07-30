const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsons, setSimpsons } = require('./fs-utils');
const authentication = require('./authentication');
const generateToken = require('./generateToken');

const app = express();
app.use(bodyParser.json());
// app.use(express.json());
app.use(authentication);

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await getSimpsons();
    return res.status(200).json(simpsons);
  } catch (err) {
    return res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const simpsons = await getSimpsons();
    const character = simpsons.find((char) => char.id === id);
    if (!character) return res.status(404).json({ 
      message: 'Simpson not found',
    });
    return res.status(200).json(character);
  } catch (err) {
    return res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  try {
    const simpsons = await getSimpsons();
    const { id = (simpsons.length + 1), name } = req.body;
    console.log(simpsons);
    const validation = simpsons
      .some((char) => Number(char.id) === Number(id));
    console.log(validation);
    if (validation) return res.status(409).json({ 
      message: 'ID already exists',
    });
    simpsons.push({ id: `${id}`, name });
    await setSimpsons(simpsons);
    // return res.status(204).end();
    return res.status(201).json({ 
      message: 'Personagem adicionado com sucesso!',
    });
  } catch (err) {
    return res.status(500).end();
  }
});

app.post('/signup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;
    const users = [email, password, firstName, phone];
    if (users.includes(undefined)) {
      return res.status(401).json({ message: 'Missing Fields' });
    }
    return res.status(200).json({ token: generateToken() });
  } catch (err) {
    return res.status(500).end();
  }
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});