var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: String,
    avatar: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    googleId: String,
    created_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;
