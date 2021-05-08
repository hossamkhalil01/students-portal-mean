const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    match: /^[a-z ,.'-]+$/,
  },
  age: { type: number, required: true, max: 80 },
  email: { type: String, match: /.*@.*\..*/, unique: true },
});

const UserModel = mongoose.model("User", userSchema);

UserModel.create();

module.exports = UserModel;
