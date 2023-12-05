import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import morganMiddleware from "./app/middleware/morgan.middleware";
import { AppRouter } from "./app/routes";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(morganMiddleware);
app.use(express.json());

// Versioning API
export default app.use("/api/v1", AppRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
