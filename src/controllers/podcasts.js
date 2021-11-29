const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({});
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

router.post("/podcast", (req, res) => {
  if (bodyisEmpty(req.body)) {
    res.status(400).send('No disponible');
  } else {
    podcasts.push({ id: req.params.id, title: req.params.title, author: req.params.author, episode: req.params.episode, description: req.params.description, image: req.params.image, language: req.params.language, url: req.params.url, genre: req.params.genre });
    res.send({ podcasts })
  }

});


module.exports = router;
