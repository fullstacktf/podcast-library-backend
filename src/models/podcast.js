const mongoose = require("mongoose");
const podcastSchema = new mongoose.Schema({
    title: String,
    author: String,
    episode: Number,
    description: String,
    image: String,
    language: String,
    url: String,
    genre: String,
    provider: String
});

module.exports = mongoose.model("Podcast", podcastSchema);