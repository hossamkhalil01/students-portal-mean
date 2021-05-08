const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentsRouter = require("./routes/students");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/students_protal_mean", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
    app.listen(8000, (err) => {
      if (err) return console.log(err);

      return console.log("started server");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.use("/students", studentsRouter);
