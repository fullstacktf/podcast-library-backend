const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Podcast = require("../models/podcast");

// Middleware
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

// 🚀 GET - /podcasts/all ->
router.get("/all", async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.json(podcasts);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// 🚀 GET - /podcasts/:id ->
router.get("/:id", async (req, res) => {
  try {
    const podcast = await Podcast.findOne({ _id: req.params.id });
    res.json(podcast);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// 🚀 GET - /podcasts/title/:title ->
router.get("/title/:title", async (req, res) => {
  try {
    let regex = new RegExp(req.params.title, "g");
    const podcast = await Podcast.find({ title: { $regex: regex } });
    res.json(podcast);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// 🚀 GET - /podcasts/genre/all ->
router.get("/genre/all", async (req, res) => {
  try {
    const podcast = await Podcast.distinct("genre");
    res.json(podcast);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// 🚀 GET - /podcasts/genre/:genre ->
router.get("/genre/:genre", async (req, res) => {
  try {
    const podcast = await Podcast.find({ genre: req.params.genre });
    res.json(podcast);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// 🚀 GET - /podcasts/author/:author ->
router.get("/author/:author", async (req, res) => {
  try {
    let regex = new RegExp(req.params.author, "g");
    const podcast = await Podcast.find({ author: { $regex: regex } });
    res.json(podcast);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// 🚀 GET - /podcasts/author/all
router.get("/author/all", async (req, res) => {
  try {
    const podcast = await Podcast.distinct("author");
    res.json(podcast);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// ❌ DELETE - /podcasts/:id ->
router.delete("/:id", async (req, res) => {
  try {
    const podcastName = await Podcast.deleteOne({ _id: req.params.id });
    res.status(200).json(podcastName);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// ❓ 🔨 POST - /podcasts/insert ->
router.post("/insert/", async (req, res) => {

  const post = new Podcast({
    title: req.body.title,
    author: req.body.author,
    episode: req.body.episode,
    description: req.body.description,
    image: req.body.image,
    language: req.body.language,
    url: req.body.url,
    genre: req.body.genre,
    provider: req.body.provider,
  });

  try {
    const podcastDB = await post.save();

    res.json({
      error: null,
      data: podcastDB
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
