const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// Allow the API to be used by external URLs:
app.use((req, res, next) => {
  // Set the allowed URLs:
  const allowedOrigins = ['http://localhost:3000/'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

//Connect to db ->
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("💽 Connected to DB!")
);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "CONNECTION ERROR"));
// db.once("open", () => {
//   // conectados!
//   console.log("conectados PRRRRRRRR");
// });

//Import Routes ->
const podcastsRoute = require("./controllers/podcasts.js"); //!
app.use('/podcasts', podcastsRoute); //!

//Routes ->
app.get('/', (req, res) => {
  res.send("✅ The api is working, access /podcasts/all to get the data of all podcasts.");
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