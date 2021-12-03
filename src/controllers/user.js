const express = require("express");
const { mongo } = require("mongoose");
const router = express.Router();
const user = require("../models/user");

/* router.post("/usuarios",(req,res)=>{

    if(bodyisEmpty(req.body)){
        res.status(400).send('No disponible');
    }else{
        podcasts.push({id: req.params.id,nombre: req.params.nombre, email: req.params.email, contraseña: req.params.contraseña});
        res.send({podcasts})
    }
  
});
  
  
router.delete('/usuarios/:id', (req,res)=>{
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
}); */
  
router.get("/:id", async (req, res) => {
    try {
     await user.findById(req.params.id).then(result =>{
        res.status(200).json({
          user:result
        })
      })
    } catch (err) {
      res.json({ message: err })
    }
  });

  router.get("/all", async (req, res) => {
    try {
      const usuarios = await user.find();
      res.status(200).json(usuarios);
    } catch (err) {
      res.json({ message: err })
    }
  });

  router.post("/", (req, res) => {
    console.log(req.body);
  
    const user = {
      username: req.body.username,
      password: req.body.password,
      
    };
    
    new user(post).save();
  });

  router.delete("/:id", async (req, res) => {
    const usuario = await user.deleteOne({_id: req.params.id});
    res.status(200).json(usuario);
  });

  module.exports = router;