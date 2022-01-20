import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// set route for posts
// http://localhost:8080/posts
router.get("/", getPosts);
router.post("/", createPost);

export default router;