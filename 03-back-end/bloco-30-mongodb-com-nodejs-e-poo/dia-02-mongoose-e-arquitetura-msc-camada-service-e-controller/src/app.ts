import express from 'express';
import errorHandler from './middlewares/error';
import frameRouter from './routes/frame';
import lensRouter from './routes/lens';
import 'express-async-errors';

const app = express();
app.use(express.json());
app.use('/frame', frameRouter);
app.use('/lens', lensRouter);
app.use(errorHandler);

export default app;
