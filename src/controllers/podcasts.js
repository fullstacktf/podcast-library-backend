const express = require("express");
const { mongo } = require("mongoose");
const router = express.Router();
const Podcast = require("../models/podcast");

router.get("/all", async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.json(podcasts);
  } catch (err) {
    res.json({ message: err })
  }
});

router.post("/insert", async (req, res) => {

  const {title,author,episode,description,image,language,genre } = req.body;
  
  const newPodcast = new Podcast({title,author,episode,description,image,language,genre});
  await newPodcast.save();
 
  res.status(200)
});


router.get("/:id", async (req, res) => {
  try {
   await Podcast.findById(req.params.id).then(result =>{
      res.status(200).json({
        podcast:result
      })
    })
  } catch (err) {
    res.json({ message: err })
  }
});

router.get("/title/:title", async (req, res) => {
    const podcastName = await Podcast.findOne({title: req.params.title});
    console.log(podcastName)
    res.status(200).json(podcastName);
});

router.delete("/:id", async (req, res) => {
  const podcastName = await Podcast.deleteOne({_id: req.params.id});
  res.status(200).json(podcastName);
});


router.get("/genre/:genre", async (req, res) => {
  const podcast = await Podcast.find({genre: req.params.genre})
  res.status(200).json(podcast);
});

router.get("/author/:author", async (req, res) => {
  const podcast = await Podcast.find({author: req.params.author})
  res.status(200).json(podcast);
});



module.exports = router;
