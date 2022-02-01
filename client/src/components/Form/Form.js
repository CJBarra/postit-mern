import React, { useState,useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style.js";
import { createPost, updatePost } from "../../actions/posts.js";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch(); 
  // if currentId exists, loop over state.posts to find only post with matching id.
  const post = useSelector((state) => currentId? state.posts.find((p)=> p._id === currentId) : null);

  useEffect(()=> {
    // populates post data in form fields if post exists.
    if(post) setPostData(post);
  }, [post]);

  const clear = () => {};
  const handleSubmit = (e) => {
    // on submit dispatch POST request to api for all submitted user data in form
    e.preventDefault();
    // check for currentId of postData, if true, dispatch to updatePost() passing currentId and postData
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    }

    dispatch(createPost(postData));
  };


  // ---------------- RENDER ---------------- //
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Edit' : 'Create A Post'}</Typography>
        <TextField name="author" variant="outlined" label="author" fullWidth value={postData.author} onChange={(e) => setPostData({ ...postData, author: e.target.value })} />
        <TextField variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} name="title" />
        <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value }) } />
        <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />

        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })  } />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="Submit" fullWidth>Submit</Button>

        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
