const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const podcastsRoute = require("./controllers/podcasts.js");
require("dotenv/config");

// 🚀 Configures the Access-Control-Allow-Origin CORS header ->
app.use(cors());

// ✅ Connect to db ->
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("💽 Connected to DB!")
);

// 🛫 Import Routes and home route ->
app.use('/podcasts', podcastsRoute);

app.get('/', (req, res) => {
  res.send("✅ The api is working, access /podcasts/all to get the data of all podcasts.");
})

// 🪄 Port ->
app.listen(3001, () => console.log("✅ Listening on port: 3001"));