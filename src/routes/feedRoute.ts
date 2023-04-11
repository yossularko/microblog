/**
 * @openapi
 * tags:
 *   name: Feeds
 *   description: The feeds managing API
 * /feed:
 *   get:
 *     summary: Lists all the feeds
 *     tags: [Feeds]
 *     responses:
 *       200:
 *         description: The list of the feeds
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Feed'
 *   post:
 *     summary: Create a new feed
 *     tags: [Feeds]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FeedBody'
 *     responses:
 *       200:
 *         description: The created feed.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FeedBodyRes'
 *       500:
 *         description: Some server error
 * /feed/{id}:
 *   get:
 *     summary: Get the feed by id
 *     tags: [Feeds]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The feed id
 *     responses:
 *       200:
 *         description: The feed response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FeedBodyRes'
 *       404:
 *         description: The feed was not found
 *   put:
 *    summary: Update the feed by the id
 *    tags: [Feeds]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The feed id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/FeedBodyPut'
 *    responses:
 *      200:
 *        description: The feed was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FeedBodyRes'
 *      404:
 *        description: The feed was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the feed by id
 *     tags: [Feeds]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The feed id
 *     responses:
 *       200:
 *         description: The feed was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FeedBodyRes'
 *       404:
 *         description: The feed was not found
 * 
 * components:
 *   schemas:
 *     Feed:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the feed
 *         content:
 *           type: string
 *           description: The content of your feed
 *         authorId:
 *           type: number
 *           description: The feed author id
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the feed was added
 *         author:
 *           type: object
 *           properties:
 *              id:
 *                  type: number
 *                  description: The author id
 *              email:
 *                  type: string
 *                  description: The author email
 *              username:
 *                  type: string
 *                  description: The author username
 *              name:
 *                  type: string
 *                  description: The author name
 *       example:
 *         id: 123
 *         content: The New Turing Omnibus
 *         authorId: 24
 *         createdAt: 2023-04-11T02:05:04.926Z
 *         author: 
 *              id: 24
 *              email: yos@admin.com
 *              username: yossularko
 *              name: Yos Sularko
 *     FeedBody:
 *       type: object
 *       required:
 *         - content
 *         - authorEmail
 *       properties:
 *         content:
 *           type: string
 *           description: The content of your feed
 *         authorEmail:
 *           type: string
 *           description: The feed author
 *       example:
 *         content: The New Turing Omnibus
 *         authorEmail: yos@admin.com
 *     FeedBodyPut:
 *       type: object
 *       required:
 *         - content
 *         - authorId
 *       properties:
 *         content:
 *           type: string
 *           description: The content of your feed
 *         authorId:
 *           type: string
 *           description: The feed author id
 *       example:
 *         content: The New Turing Omnibus
 *         authorId: 24
 *     FeedBodyRes:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the feed
 *         content:
 *           type: string
 *           description: The content of your feed
 *         authorId:
 *           type: number
 *           description: The feed author id
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the feed was added
 *       example:
 *         id: 3
 *         content: The New Turing Omnibus
 *         authorId: 24
 *         createdAt: 2023-04-11T02:05:04.926Z
 */
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
