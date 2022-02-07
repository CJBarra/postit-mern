import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import postRoutes from "./routes/posts.js";

// initialize app
const app = express();
// load env file contents
dotenv.config();
// setup bodyParser to perform proper requests
// images are included in this application, so set size limitations & encode
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//------------------- Routes ------------------- //
app.use("/posts", postRoutes);

// Setup mongodb database , will be hosted using their cloud/atlas version.
// https://www.mongodb.com/cloud/atlas

// connection string taken from mongodb cluster
<<<<<<< HEAD
=======
// TODO: protect credentials before deployment in mental variables
const CONNECTION_URL =
  "CONNECTION_STRING";
// setup port, env variable will be set once application pushed to Heroku.
const PORT = process.env.PORT || 8080;
>>>>>>> aaa06a1175f738d6c9924f36b66389a1d457c7d7

// Use mongoose to connect to database
// Parser, Topology values set to true || false to fix depreciation warnings
// referenced from https://mongoosejs.com/docs/5.x/docs/deprecations.html
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    //   listen for port connection, if true output running message
    app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
