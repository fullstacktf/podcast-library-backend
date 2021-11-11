const express = require("express");
const app = express();
const home = express.Router();

home.get("/", (req, res) => {
  res.send("Homepage");
});

app.use(home);
app.listen(3001, () => console.log("Listening on port: 3001"));