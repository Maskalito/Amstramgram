const connexion = require('../config/api');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    addUser(username, email, password);
});

function addUser(username, email, password) {
    connexion.query('INSERT INTO `posts` (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ msg: 'ISE' });
        }
        return res.status(200).send({ msg: 'Registration Successful' })
    });
}