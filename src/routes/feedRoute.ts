import express from "express";
import {
  deleteFeed,
  getFeedById,
  getFeeds,
  postFeed,
  updateFeed,
} from "../controllers/feedControllers";

const router = express.Router();

router.get("/", getFeeds);
router.post("/", postFeed);
router.get("/:id", getFeedById);
router.put("/:id", updateFeed);
router.delete("/:id", deleteFeed);

export default router;
