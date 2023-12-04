import { db } from "../config/prisma.config";

type User = {
  id: number;
  username: string;
  email: string;
};

export type CreateUserType = {
  email: string;
  username: string;
  password: string;
};

export const listUsers = async (): Promise<User[]> => {
  return db.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
};

export const createUser = async (
  reqBody: CreateUserType
): Promise<CreateUserType> => {
  return db.user.create({
    data: {
      username: reqBody.username,
      email: reqBody.email,
      password: reqBody.password,
    },
  });
};
