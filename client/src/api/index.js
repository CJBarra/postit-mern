import axios from "axios";

// specify url to backend route,
// reference: /routes/posts in server folder.
const url = "http://localhost:8080/posts";

// returns all posts in database, export for redux
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);