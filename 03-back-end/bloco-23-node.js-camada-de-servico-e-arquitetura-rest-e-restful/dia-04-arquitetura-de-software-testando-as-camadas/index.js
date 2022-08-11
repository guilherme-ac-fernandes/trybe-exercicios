const express = require('express');

const MovieController = require('./controllers/movieController');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.post('/movies', MovieController.create);
app.get('/movies/:id', MovieController.findById);

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
