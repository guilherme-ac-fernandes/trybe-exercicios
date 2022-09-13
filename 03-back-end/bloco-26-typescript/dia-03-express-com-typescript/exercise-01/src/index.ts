import express from 'express';
import 'dotenv/config';

import userRoute from './routers/userRoute';

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());

app.use('/user', userRoute)

app.listen(PORT, () => {
	console.log(`Listening in port ${PORT} 👂`);
});