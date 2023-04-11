import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getFeeds = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  res.json(posts);
};
