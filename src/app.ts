import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import NotFound from './app/errors/NotFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app = express()


// parsers

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req:Request, res : Response) => {
  res.send('Car Wash Booking System')
}) 

app.use('/api', router);
app.use(globalErrorHandler);

app.all('*', NotFound);

export default app;