import express from "express";
import {
  getUserByName,
  getUsers,
  postUser,
} from "../controllers/userControllers";

const router = express.Router();

router.get("/", getUsers);
router.post("/", postUser);
router.get("/:username", getUserByName);

export default router;
