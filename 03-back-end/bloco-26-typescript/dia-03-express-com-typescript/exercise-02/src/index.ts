import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';

import postRouter from './routers/postRouter';

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
	return res.status(200).json({ message: 'Ok!' })
});

app.use('/post', postRouter);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);
  
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  
  next();
});

app.listen(PORT, () => {
	console.log(`Listening in port ${PORT} 👂`);
});