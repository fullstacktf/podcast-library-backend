const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Podcast = require("../models/podcast");

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
    await Podcast.findById(req.params.id).then((result) => {
      res.status(200).json({
        podcast: result,
      });
    });
  } catch (err) {
    res.json({ message: err });
  }
});

// 🚀 GET - /podcasts/title/:title ->
router.get("/title/:title", async (req, res) => {
  const podcastName = await Podcast.findOne({ title: req.params.title });
  console.log(podcastName);
  res.status(200).json(podcastName);
});

// 🚀 GET - /podcasts/genre/:genre ->
router.get("/genre/:genre", async (req, res) => {
  const podcast = await Podcast.find({ genre: req.params.genre });
  res.status(200).json(podcast);
});

// 🚀 GET - /podcasts/author/:author ->
router.get("/author/:author", async (req, res) => {
  const podcast = await Podcast.find({ author: req.params.author });
  res.status(200).json(podcast);
});

// ❌ DELETE - /podcasts/id ->
router.delete("/:id", async (req, res) => {
  const podcastName = await Podcast.deleteOne({ _id: req.params.id });
  res.status(200).json(podcastName);
});

// ❓ 🔨 POST - /podcasts/insert ->
router.post("/insert/", (req, res) => {

  // const post = {
  //   title: req.body.title,
  //   author: req.body.author,
  //   episode: req.body.episode,
  //   description: req.body.description,
  //   image: req.body.image,
  //   language: req.body.language,
  //   genre: req.body.genre,
  //   provider: req.body.provider,
  // }

  const dbPodcast = req.body;

  Podcast.create(dbPodcast, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
      new Podcast().save(dbPodcast)
    }
  });

  // var newPodcast = new Podcast(post)
  // new Podcast().save(post);
  // res.status(200);
});











module.exports = router;
