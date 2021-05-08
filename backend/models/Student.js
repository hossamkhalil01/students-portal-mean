const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    match: /^[a-z ,.'-]+$/,
  },
  age: { type: Number, required: true, max: 80 },
  email: { type: String, match: /.*@.*\..*/, unique: true },
});

const StudentModel = mongoose.model("User", studentSchema);

StudentModel.create();

module.exports = StudentModel;
