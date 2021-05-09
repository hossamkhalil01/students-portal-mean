const express = require("express");
const Student = require("../models/Student");
const Router = express.Router();

// return all results
Router.get("/", async (req, res) => {
  const students = await Student.find();
  return res.send({ data: students }).status("200");
});

// return student results
Router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    return res.send({ data: student }).status("200");
  } catch (err) {
    return returnErrorNotFound(res);
  }
});

Router.post("/", async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    return res.send({ data: newStudent }).status("200");
  } catch (err) {
    return res.send({ data: null, message: "validation error" }).status("412");
  }
});

Router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send({ data: student }).status("200");
  } catch (err) {
    return returnErrorNotFound(res);
  }
});

Router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    return res.send().status("200");
  } catch (error) {
    return returnErrorNotFound(res);
  }
});

const returnErrorNotFound = (res) => {
  return res.send({ data: null, message: "student not found" }).status("404");
};
module.exports = Router;
