var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  gender: String
});

const User = mongoose.model('User', userSchema);

module.exports= User;