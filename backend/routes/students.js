const express = require('express');
const Student = require('../models/Student');
const Router = express.Router();

// return all results
Router.get("/", async (req, res) => {
  const students = await Student.all();
  return res.send({data: students});
});

// return student results
Router.get('/:id', async (req, res) => {

  try {
    const student = await Student.find(req.params.id);
    return res.send({data: student}).status("200");

  } catch (err) {
    return returnErrorNotFound();
  }
});


Router.post('/', async (req, res) => {

  const studentData = req.body;
  const newStudent = await Post.create(studentData);

  return res.send({data: newStudent}).status("200");

})


Router.patch('/:id', (req, res) => {

  try {

    const student = await Post.update(req.params.id, req.body);
    return res.send({data: student}).status("200");
  }catch(err){
    return returnErrorNotFound();
  }

})

Router.delete('/:id', (req, res) => {


  try {
    await Student.remove(req.params.id);
    return res.send().status("200");

  } catch (error) {
    return returnErrorNotFound();
  }
})

const returnErrorNotFound = () => {
  return res.send({data: null, message:"student not found"}).status("404");
}
module.exports = Router;