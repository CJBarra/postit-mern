import React from "react";
import Post from "./Post/Post.js";

import useStyles from "./style.js";
import { useSelector } from "react-redux";

const Feed = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <>
      <h1>FEED</h1>
      <Post />
      <Post />
    </>
  );
};

export default Feed;
