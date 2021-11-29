const express = require("express");

const mongoose = require("mongoose");
mongoose.connect("mongodb://db:27017/podcast-library", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR"));
db.once("open", () => {
  // conectados!
  console.log("conectados PRRRRRRRR");
});

const app = express();
const homeRouter = express.Router();
const podcastsRouter = require("./controllers/podcasts.js"); //!
const { Podcasts } = require("../models/podcasts");

homeRouter.get("/", async (req, res) => {
  const podcasts = await Podcasts.find();
  // { name: string, email: string, age: number, admin: string}
  res.render("index", { title: "Podcasts", podcasts: podcasts });
  //res.send("Homepage");
});

app.use(homeRouter);
app.use('/podcasts', podcastsRouter); //!
app.listen("3001", () => console.log("Listening on port: 3001"));