import { Router } from "express";
import { userRouter } from "./user.routes";

export const AppRouter = Router();

AppRouter.use("/users", userRouter);
