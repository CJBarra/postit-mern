import React from "react";
import useStyles from "./style.js";
import moment from "moment";
import { Delete, MoreHoriz, ThumbUpAlt } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const Post = ( {post, setCurrentId} ) => {
  const classes = useStyles();
  // console.log(post);
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

      {/* Author and Time Created */}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.author}</Typography>

        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      {/* Read More... content */}
      <div className={classes.overlay2}>
        <Button style={{ color: "#fff" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHoriz fontSize="default" />
        </Button>
      </div>

      {/* Post Tags */}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      {/* Content: messages */}
      <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>

      <CardContent>
        <Typography className={classes.message} variant="subtitle1" gutterBottom>{post.message}</Typography> 
      </CardContent>

      {/* Card Actions: Like, Delete */}
      <CardActions className={classes.cardActions}>
        <Button color="primary" size="small" onClick={() => {}}>
          <ThumbUpAlt fontSize="small" />Like {post.likeCount}
        </Button>
        <Button color="primary" size="small" onClick={() => {}}>
          <Delete fontSize="small" />Delete
        </Button>
      </CardActions>

    </Card>
  );
};

export default Post;
