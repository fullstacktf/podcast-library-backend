const express = require("express");
const router = express.Router();

const podcasts = [
  {
    id: 0,
    title: "Matrix",
    genre: "Action",
    autor: "Wachowski",
    description: "lorem",
    image: "undefined",
  },
  {
    id: 1,
    title: "Piratas del Caribe",
    genre: "Action",
    autor: "maria",
    description: "lorem",
    image: "undefined",
  },
  {
    id: 2,
    title: "Piratas del Caribe 2",
    genre: "Comedy",
    autor: "rafa",
    description: "lorem",
    image: "undefined",
  },
];

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
