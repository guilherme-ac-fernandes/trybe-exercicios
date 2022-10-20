import express from 'express';
import errorHandler from './middlewares/error';
import frameRouter from './routes/frame';
import 'express-async-errors';

const app = express();
app.use(express.json());
app.use(frameRouter);
app.use(errorHandler);

export default app;
