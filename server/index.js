import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

// initialize app
const app = express();

// setup bodyParser to perform proper requests
// images to be included in application, set limitations / encode
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//------------------- Routes ------------------- //
app.use("/posts", postRoutes);

// Setup mongodb database , will be hosted using their cloud/atlas version.
// https://www.mongodb.com/cloud/atlas

// connection string taken from mongodb cluster
// TODO: protect credentials before deployment in mental variables
const CONNECTION_URL =
  "CONNECTION_STRING";
// setup port, env variable will be set once application pushed to Heroku.
const PORT = process.env.PORT || 8080;

// Use mongoose to connect to database
// Parser, Topology values set to true || false to fix depreciation warnings
// referenced from https://mongoosejs.com/docs/5.x/docs/deprecations.html
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    //   listen for port connection, if true output running message
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
