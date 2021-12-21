const express = require("express");
const router = express.Router();
const User = require("../models/user");


// Middleware
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

const Joi = require("@hapi/joi");
const schemaRegister = Joi.object({
    username: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

// 🚀 GET - /user ->
router.get('/', (req, res) => {
    res.send("✅ The api is working");
});

// 🚀 GET - /user/all ->
router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

// 🚀 GET - /user/:id ->
router.get("/:id", async (req, res) => {
    try {
        await User.findById(req.params.id)
            .then(result => {
                res.status(200).json({
                    user: result
                });
            });
    } catch (err) {
        res.json({ message: err });
    }
});

// ❌ DELETE - /user/:id ->
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        res.json({ message: err });
    }
});

// ❓ 🔨 POST - /user/login ->
router.post("/login", async (req, res) => {

    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: true, message: "email not registered" });

    const checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (!checkPassword) return res.status(400).json({ error: true, message: "wrong password" });

    const token = jwt.sign({
        username: user.username,
        email: user.email,
        id: user._id
    }, process.env.TOKEN_SECRET);

    res.header("auth-token", token).json({
        error: null,
        date: { token }
    });
});

// ❓ 🔨 POST - /user/register ->
router.post("/register", async (req, res) => {

    const { error } = schemaRegister.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const email = await User.findOne({ email: req.body.email });
    if (email) return res.status(400).json({ error: true, message: "email already registered" });

    const username = await User.findOne({ username: req.body.username });
    if (username) return res.status(400).json({ error: true, message: "username already registered " });

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: password,
        email: req.body.email
    });

    try {
        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;