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
    res.json({ message: err });
  }
});

// 🚀 GET - /podcasts/:id ->
router.get("/:id", async (req, res) => {
  try {
    const podcast = await Podcast.find({ _id: req.params.id });
    res.json(podcast);
  } catch (err) {
    res.json({ message: err });
  }
});

// 🚀 GET - /podcasts/title/:title ->
router.get("/title/:title", async (req, res) => {
  try {
    const podcast = await Podcast.find({ title: req.params.title });
    res.json(podcast);
  } catch (err) {
    res.json({ message: err });
  }
});

// 🚀 GET - /podcasts/genre/:genre ->
router.get("/genre/:genre", async (req, res) => {
  try {
    const podcast = await Podcast.find({ genre: req.params.genre });
    res.json(podcast);
  } catch (err) {
    res.json({ message: err });
  }
});

// 🚀 GET - /podcasts/author/:author ->
router.get("/author/:author", async (req, res) => {
  try {
    const podcast = await Podcast.find({ author: req.params.author });
    res.json(podcast);
  } catch (err) {
    res.json({ message: err });
  }
});

// ❌ DELETE - /podcasts/id ->
router.delete("/:id", async (req, res) => {
  const podcastName = await Podcast.deleteOne({ _id: req.params.id });
  res.status(200).json(podcastName);
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
    genre: req.body.genre,
    provider: req.body.provider,
  });

  try {

    const podcastDB = await post.save();
    res.json({
      error: null,
      data: podcastDB
    })

  } catch (error) {
    res.status().json(error);
  }

  // const dbPodcast = req.body;

  // Podcast.create(dbPodcast, (err, data) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   } else {
  //     res.status(201).send(data);
  //     new Podcast().save(dbPodcast);
  //   }
  // });

  // var newPodcast = new Podcast(post)
  // new Podcast().save(post);
  // res.status(200);
});

module.exports = router;
