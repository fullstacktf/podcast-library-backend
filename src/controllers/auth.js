const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Middleware
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

// 🚀 GET - /user ->
router.get('/', (req, res) => {
    res.send("✅ The api is working");
});

// ❓ 🔨 POST - /user/register ->
router.post("/register", async (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    try {

        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        })

    } catch (error) {
        res.status().json(error);
    }

});

// router.get("/:id", async (req, res) => {
//     try {
//      await user.findById(req.params.id).then(result =>{
//         res.status(200).json({
//           user:result
//         })
//       })
//     } catch (err) {
//       res.json({ message: err })
//     }
//   });

//   router.get("/all", async (req, res) => {
//     try {
//       const usuarios = await user.find();
//       res.status(200).json(usuarios);
//     } catch (err) {
//       res.json({ message: err })
//     }
//   });

//   router.post("/", (req, res) => {
//     console.log(req.body);

//     const user = {
//       username: req.body.username,
//       password: req.body.password,

//     };

//     new user(post).save();
//   });

//   router.delete("/:id", async (req, res) => {
//     const usuario = await user.deleteOne({_id: req.params.id});
//     res.status(200).json(usuario);
//   });


module.exports = router;