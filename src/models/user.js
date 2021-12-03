const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String,required: true}
});

/* const model = mongoose.Model('User.Schema', UserSchemayarn ) */

module.exports = mongoose.model("user", UserSchema);