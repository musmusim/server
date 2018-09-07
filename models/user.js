var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    gender: String,
    statusFb: {
        type: Number,
        default: 0
    },
    statusGoogle: {
        type: Number,
        default: 0
    },
});

var User = mongoose.model('User', userSchema);

module.exports = User