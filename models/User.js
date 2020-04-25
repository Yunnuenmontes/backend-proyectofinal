const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const plm=require("passport-local-mongoose")

const userSchema = new Schema({
  // profilePicture:{
  //   type: String,
  //   required: true
  // },
  name : {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // password: String,
  age  : {
    type: String,
    required: true
  },
  cel : {
    type: String,
    required: true
  },
});

userSchema.plugin(plm, {usernameField:"email"})
const User = mongoose.model('User', userSchema);

module.exports = User;
