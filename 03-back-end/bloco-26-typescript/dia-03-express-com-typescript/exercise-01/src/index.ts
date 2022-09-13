import 'dotenv/config';
import app from './routers/app';

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
	console.log(`🚀  mission to mars running in port ${PORT}`);
});