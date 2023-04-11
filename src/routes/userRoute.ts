import express from "express";
import { getUsers, postUser } from "../controllers/userControllers";

const router = express.Router();

router.get("/", getUsers);
router.post("/", postUser);

export default router;
