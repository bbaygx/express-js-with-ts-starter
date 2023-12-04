import { Router } from "express";
import { createNewUser, getAllUser } from "../controllers/user.controller";
import { schema, validationRequest } from "../middleware/user.middleware";

export const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.post("/", validationRequest(schema), createNewUser);
