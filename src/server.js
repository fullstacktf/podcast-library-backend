const express = require("express");
const app = express();
const port = 3001;



app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on: ", port);
});
