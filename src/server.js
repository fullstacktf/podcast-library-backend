const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("connected to DB!")
);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "CONNECTION ERROR"));
// db.once("open", () => {
//   // conectados!
//   console.log("conectados PRRRRRRRR");
// });

//Import Routes
const podcastsRoute = require("./controllers/podcasts.js"); //!
app.use('/podcasts', podcastsRoute); //!

//ROUTES
app.get('/', (req, res) => {
  res.send("Home podcastlibrary");
})


// const { Podcasts } = require("../models/podcasts");

// const homeRouter = express.Router();

// homeRouter.get("/", async (req, res) => {
//   const podcasts = await Podcasts.find();
//   // { name: string, email: string, age: number, admin: string}
//   // res.render("index", { title: "Podcasts", podcasts: podcasts });
//   res.send("Homepage");
// });

// app.use(homeRouter);

app.listen(3001, () => console.log("Listening on port: 3001"));