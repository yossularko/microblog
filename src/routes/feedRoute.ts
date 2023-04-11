import express from "express";
import { getFeeds, postFeed } from "../controllers/feedControllers";

const router = express.Router();

router.get("/", getFeeds);
router.post("/", postFeed);

export default router;
