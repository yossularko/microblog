import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  const result = await prisma.user.findMany();
  res.json(result);
};

export const postUser = async (req: Request, res: Response) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  });
  res.json(result);
};
