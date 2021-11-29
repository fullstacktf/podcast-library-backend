const mongoose = require("mongoose");
const podcastSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    admin: Boolean
});

module.exports = mongoose.model("Podcast", podcastSchema);