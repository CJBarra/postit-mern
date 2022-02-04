import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";

const router = express.Router();

// set route for posts
// http://host:PORT/posts
router.get("/", getPosts);
router.post("/", createPost);

// ---------- by :id
// router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.patch(':/id/likePost', likePost);
router.delete('/:id', deletePost);

export default router;