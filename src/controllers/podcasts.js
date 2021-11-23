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

router.post("/podcast",(req,res)=>{

  if(bodyisEmpty(req.body)){
      res.status(400).send('No disponible');
  }else{
      podcasts.push({id: req.params.id, title: req.params.title, author: req.params.author, episode: req.params.episode, description: req.params.description, image: req.params.image, language: req.params.language, url: req.params.url, genre: req.params.genre });
      res.send({podcasts})
  }

});
router.post("/usuarios",(req,res)=>{

  if(bodyisEmpty(req.body)){
      res.status(400).send('No disponible');
  }else{
      podcasts.push({id: req.params.id,nombre: req.params.nombre, email: req.params.email, contraseña: req.params.contraseña});
      res.send({podcasts})
  }

});


router.delete('/usuario/:id', (req,res)=>{
  if(bodyisEmpty(req.body)){
      res.status(400).send("No se ha encontrado el usuario a eliminar");
  }else{
      const usuarioId = req.params.id();
      const usuarioEncontrado = usuarios.findIndex((usuario) =>usuario.id ===usuarioId)

      if(podcast.index ===-1){
          res.status(400).send("No se ha encontrado el usuario a eliminar");
      }else{
          usuarios.splice(usuarioEncontrado,1)
          res.send({usuarios})
      }
    }
});

/* router.delete('/usuario/:id', (req,res)=>{
  if(bodyisEmpty(req.body)){
      res.status(400).send("No se ha encontrado el usuario a eliminar");
  }else{
      const usuarioId = req.params.id();
      const usuarioEncontrado = usuarios.findIndex((usuario) =>usuario.id ===usuarioId)

      if(usuarioEncontrado ===-1){
          res.status(400).send("No se ha encontrado el usuario a eliminar");
      }else{
          usuarios = usuarios.filter((usuario) =>usuario.id !==usuarioId)
          res.send({usuarios})
      }
  }
}); */



/* router.delete('/podcast/:title', (req,res)=>{
  if(bodyisEmpty(req.body)){
      res.status(400).send("No se ha encontrado el titulo a eliminar");
  }else{
      const title = req.params.title.LowerCase();
      const podcastEncontrado = podcasts.findIndex((podcast) =>podcast.title.LowerCase() ===title)

      if(podcastEncontrado ===-1){
          res.status(400).send("No se ha encontrado el titulo a eliminar");
      }else{
          podcasts = podcasts.filter((podcast) =>podcast.title.LowerCase() !== title)
          res.send({podcasts})
      }
  }
});
 */

router.delete('/podcast/:title', (req,res)=>{
  if(bodyisEmpty(req.body)){
      res.status(400).send("No se ha encontrado el titulo a eliminar");
  }else{
      const title = req.params.title.LowerCase();
      const podcastEncontrado = podcasts.findIndex((podcast) =>podcast.title.LowerCase() ===title)

      if(podcastEncontrado===-1){
          res.status(400).send("No se ha encontrado el titulo a eliminar");
      }else{
          podcasts.splice(podcastEncontrado,1)
          res.send({podcasts})
      }
  }
})



module.exports = router;
