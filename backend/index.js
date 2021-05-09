const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const studentsRouter = require("./routes/students");

const app = express();

const port = process.env.PORT || 8000;
const dbURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/students_protal_mean";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to mongodb");
    app.listen(port, (err) => {
      if (err) return console.log(err);

      return console.log("started server");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use("/students", studentsRouter);
