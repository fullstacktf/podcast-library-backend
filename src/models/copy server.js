const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require('./model/user');
const bcrypt = require('bcryptjs');
//require("dotenv/config");

mongoose.connect('mongodb://localhost:27017/login-app-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.post('/api/register', async (req, res) => {
  console.log(req.body)
  const { username, password } = req.body;

  console.log(await bcrypt.hash(password, 10));

  res.json({ status: 'ok' });
});

//Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("connected to DB!")
);

//Import Routes
const podcastsRoute = require("./controllers/podcasts.js");
app.use('/podcasts', podcastsRoute);

//ROUTES
app.get('/', (req, res) => {
  res.send("Home podcastlibrary");
});


app.listen(9999, () => console.log("Listening on port: 9999"));