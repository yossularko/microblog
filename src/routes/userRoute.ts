/**
 * @openapi
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserBody'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /user/{username}:
 *   get:
 *     summary: Get the user by username
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: The username
 *     responses:
 *       200:
 *         description: The user response by username
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The feed was not found
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The user email
 *         username:
 *           type: number
 *           description: The username of user
 *         name:
 *           type: string
 *           description: The user name
 *       example:
 *         id: 3
 *         email: arwen@admin.com
 *         username: arwen
 *         name: Arwen Evenstar
 *     UserBody:
 *       type: object
 *       required:
 *         - email
 *         - username
 *         - name
 *       properties:
 *         email:
 *           type: string
 *           description: The user email
 *         username:
 *           type: number
 *           description: The username of user
 *         name:
 *           type: string
 *           description: The user name
 *       example:
 *         email: arwen@admin.com
 *         username: arwen
 *         name: Arwen Evenstar
 */
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
