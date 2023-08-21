const express = require("express");
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.API_PORT;

app.use(cors());

const usersRoutes = require('./users/getUsers');
const postsRoutes = require('./posts/getPosts');

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);


app.get("*", function(req, res) {
    return res.status(404).json({ msg: 'not found' })
});

app.listen(port, () => {
    console.log(`back listening at http://localhost:${port}`);
});
