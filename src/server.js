const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const podcastsRoute = require("./controllers/podcasts.js");
const authRoute = require("./controllers/auth.js");
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
app.use('/user', authRoute);

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

//para testing LUJÁN- Iría debajo de "db connection"
//don't show the log when it is test
//if(config.util.getEnv('NODE_ENV') !== 'test') {
//use morgan to log at command line
// app.use(morgan('combined')); //'combined' outputs the style LOGs
//}

//parse application/json and look for raw text
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.text());
//app.use(bodyParser.json({ type: 'application/json'}));

//app.get("/", (req, res) => res.json({message: "Welcome to our  page!"}));

//app.route("/podcast")
// .get(podcast.getpodcasts)
// .post(podcast.postcasts);
//app.route("/podcast/:id")
// .get(podcast.getpodcadts)
// .delete(podcast.deletepodcast);

//module.exports = app; // for testing

app.listen(3001, () => console.log("✅ Listening on port: 3001"));
