import express from "express";
import {
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

export default router;
