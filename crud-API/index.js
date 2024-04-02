const express = require("express");
const PORT = 8000;
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

app.listen(PORT, async () => {
       console.log(`server up on port ${PORT}`);
});
app.use(express.json());

app.use(router);
app.use(cors());
// app.use(cors({
//   origin : 'http://localhost:5173/',
//   methods : ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
// }));
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
