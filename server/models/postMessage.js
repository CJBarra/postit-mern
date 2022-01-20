import mongoose from "mongoose";

// create schema for each post using mongoose.Schema()
/**
 * title
 * message
 * creator
 * tags
 * file url [img]
 * like counter [num], set default to 0
 * created [datetime] , set default current
 */
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  author: String,
  tags: [String],
  selectedFile: String,
  likeCounter: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// convert schema to model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
