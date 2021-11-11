const express = require("express");
const app = express();
const homeRouter = express.Router();
const podcastsRouter = require("./controllers/podcasts.js") //!

homeRouter.get("/", (req, res) => {
  res.send("Homepage");
});

app.use(homeRouter);
app.use('/podcasts', podcastsRouter) //!
app.listen("3001", () => console.log("Listening on port: 3001"));
