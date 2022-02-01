import { request } from "express";
import PostMessage from "../models/postMessage.js";

// create async request for latest GET posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// create posts
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

// update posts
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  // Check if id is valid in mongoose
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("That id does not exist in post..");
  }

  /*
   * If valid, find post by Id and update data model in PostMessage.
   * Data is received from the frontend 'request.body'.
   * Set {new: property to true} for updated object to be delivered.
   */
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
