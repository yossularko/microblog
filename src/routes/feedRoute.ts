import express from "express";
import { getFeeds } from "../controllers/feedControllers";

const router = express.Router();

router.get("/", getFeeds);

export default router;
