import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post.js";
import useStyles from "./style.js";

const LiveFeed = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return ( 
    // show circular progress if the length of posts is 0.
    !posts.length ? (<CircularProgress />) : (
      <Grid className={classes.mainContainer} alignItems="stretch" spacing={2} container>
        {posts.map((post) => (
          <Grid className={classes.postWrapper} key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default LiveFeed;
