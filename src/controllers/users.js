router.post("/usuarios",(req,res)=>{

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
  