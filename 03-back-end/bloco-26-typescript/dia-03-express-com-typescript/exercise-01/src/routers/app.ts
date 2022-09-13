import express from 'express';
import userController from '../controllers/userController';

const app = express();
app.use(express.json());


app.get('/', (_req, res) => res.sendStatus(201));

app.get('/user', userController.getAll);
app.get('/user/:id', userController.getById);

export default app;