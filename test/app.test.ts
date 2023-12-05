// server.ts

import express, { Application } from "express";
import dotenv from "dotenv";
import morganMiddleware from "../app/middleware/morgan.middleware";
import { AppRouter } from "../app/routes";

dotenv.config();

const app: Application = express();
const port = 8000;

app.use(morganMiddleware);
app.use(express.json());

// Versioning API
app.use("/api/v1", AppRouter);

const server = app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

// Export the server for testing purposes
export { server, app };
