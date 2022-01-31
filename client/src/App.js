import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import Form from "./components/Form/Form.js";
import painting from "./images/3600_8_05.png";
import useStyles from "./styles.js";
import LiveFeed from "./components/LiveFeed/LiveFeed";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  /*
   * Note:
   * redux-thunk needs custom hook for useDispatch
   * const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
   */

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Lorem Ipsum
        </Typography>
        <img
          src={painting}
          className={classes.image}
          alt="painting in color"
          height="80"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <LiveFeed />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
