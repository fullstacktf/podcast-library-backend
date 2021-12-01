const mongoose = require("mongoose");
const podcastSchema = new mongoose.Schema({
    title: String,
    author: String,
    episode: Number,
    description: String,
    cover: String,
    language: String,
    url: String,
    genre: String
});

module.exports = mongoose.model("Podcast", podcastSchema);