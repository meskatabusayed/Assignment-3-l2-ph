import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
// import router from "./app/routes";
import GlobalErrorHandel from "./app/middlewares/globalErrorHandel";
// import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

// Middleware to parse cookies
app.use(cookieParser());


// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


// Application routes
app.use("/api", router);


app.get("/", (req: Request, res: Response) => {
  const result = "Hello Car Wash Center !!!";
  res.send(result);
});


// Global error handler
app.use(GlobalErrorHandel);

app.use(notFound);

export default app;