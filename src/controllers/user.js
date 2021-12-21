const express = require("express");
const { mongo } = require("mongoose");
const router = express.Router();
const user = require("../models/user");

router.get("/:id", async (req, res) => {
  try {
    await user.findById(req.params.id).then(result => {
      res.status(200).json({
        user: result
      });
    });
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/all", async (req, res) => {
  try {
    const usuarios = await user.find();
    res.status(200).json(usuarios);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);

  const user = {
    username: req.body.username,
    password: req.body.password,

  };

  new user(post).save();
});

router.delete("/:id", async (req, res) => {
  const usuario = await user.deleteOne({ _id: req.params.id });
  res.status(200).json(usuario);
});

module.exports = router;