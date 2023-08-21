const connexion = require('../config/api');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    getPosts(res);
});

function getPosts(res) {
    connexion.query('SELECT * FROM posts', (err, results) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });
        return res.status(200).json(results.rows);
    });
}

module.exports = router;