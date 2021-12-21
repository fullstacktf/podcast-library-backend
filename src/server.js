const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const podcastsRoute = require("./controllers/podcasts.js");
const authRoute = require("./controllers/auth.js");
require("dotenv/config");
const validateToken = require("./controllers/validate-token.js");
const dashboardRoute = require("./controllers/dashboard.js");

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
app.use('/user', authRoute);
app.use('/user/dashboard', validateToken, dashboardRoute);

app.get('/', (req, res) => {
  res.send("✅ The api is working, access /podcasts/all to get the data of all podcasts.");
});

app.listen(3001, () => console.log("✅ Listening on port: 3001 . It works"));
