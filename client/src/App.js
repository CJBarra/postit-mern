import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import Form from "./components/Form/Form.js";
import LiveFeed from "./components/LiveFeed/LiveFeed";
import bgImage from "./images/3800_2_03.png";
import useStyles from "./styles.js";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxidth="lg" className={classes.container}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Heading 3
        </Typography>
        <img src={bgImage} className={classes.image} alt="background in color" height="80" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid className={classes.liveFeed} item xs={12} sm={6}>
              <LiveFeed setCurrentId={setCurrentId} />
            </Grid>
            <Grid className={classes.formMobile} item xs={12} sm={6} md={5}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
