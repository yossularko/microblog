import express from "express";
import {
  getFeedById,
  getFeeds,
  postFeed,
} from "../controllers/feedControllers";

const router = express.Router();

router.get("/", getFeeds);
router.post("/", postFeed);
router.get("/:id", getFeedById);

export default router;
