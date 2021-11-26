const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ podcasts });
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = podcasts.find((user) => user.id === userId);
  res.send({ user });
});

router.get("/title/:title", (req, res) => {
  const title = req.params.title.toLowerCase();
  const podcast = podcasts.find(
    (podcast) => podcast.title.toLowerCase() === title
  );
  res.send({ podcast });
});

router.get("/genre/:genre", (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const podcast = podcasts.filter(
    (podcast) => podcast.genre.toLowerCase() === genre
  );
  res.send({ podcast });
});

router.get("/autor/:autor", (req, res) => {
  const autor = req.params.autor.toLowerCase();
  const podcast = podcasts.filter(
    (podcast) => podcast.autor.toLowerCase() === autor
  );
  res.send({ podcast });
});

module.exports = router;