import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// -------- GET latest posts --------//
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// -------- CREATE posts --------//
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    // check for successful creation
    res.status(201).json(newPost);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

// -------- PATCH : UPDATE posts --------//
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  // Check if id is valid in mongoose
  if (!mongoose.Types.ObjectId.isValid(_id)) { return res.status(404).send("That id does not exist in post.."); }

  /*
   * If valid, find post by Id and update data model in PostMessage.
   * Data is received from the frontend 'request.body'.
   * Set {new: property to true} for updated object to be delivered.
   */
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true, });

  res.json(updatedPost);
};

// -------- LIKE posts --------//
export const likePost = async (req, res) =>{
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) { return res.status(404).send("That id does not exist in post.."); }

  const post = await PostMessage.findByIdAndUpdate(id);
  const updatedPostLikeCount = await PostMessage.findByIdAndUpdate(id, { likeCounter: post.likeCounter + 1 }, {new: true})

  res.json(updatedPostLikeCount);
}

// -------- DELETE posts --------//
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) { return res.status(404).send("That id does not exist in post.."); }

  await PostMessage.findOneAndRemove(id);
  res.json({ message: "Post has been deleted." });
};
