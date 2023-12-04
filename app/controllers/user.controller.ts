import * as UserService from "../services/user.service";
import { body, validationResult } from "express-validator";
import type { Request, Response } from "express";
import { Prisma } from "@prisma/client";

export async function getAllUser(req: Request, res: Response) {
  try {
    const user = await UserService.listUsers();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function createNewUser(req: Request, res: Response) {
  try {
    const reqBody = req.body;
    const result = await UserService.createUser(reqBody);
    res.status(201).json(result);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email"
        );
      }
    }
    throw e;
  }
}
