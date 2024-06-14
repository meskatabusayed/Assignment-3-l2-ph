import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';
const app = express()


// parsers

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req:Request, res : Response) => {
  res.send('Hello World!')
}) 

app.use('/api', router);

export default app;