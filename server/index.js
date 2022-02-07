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

app.get('/', (req, res)=>{
  res.send('Hello from PostIt API');
})
// Setup mongodb database , will be hosted using their cloud/atlas version.
// https://www.mongodb.com/cloud/atlas

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, // depreciation warning fix(s)
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`))
  )
  .catch((error) => console.log(error.message));

