const connexion = require('../config/api');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let username = req.body.username;
    let user_image = req.body.user_image;
    let post_image = req.body.post_image;
    let description = req.body.description;
    addPost(username, user_image, post_image, description);
});

function addPost(username, user_image, post_image, description) {
    connexion.query('INSERT INTO `posts` (username, user_image, post_image, description) VALUES (?, ?, ?, ?)', [username, user_image, post_image, description], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ msg: 'ISE' });
        }
        return res.status(200).send({ msg: 'Registration Successful' })
    });
}