const { Client } = require('pg');

const connexion = new Client({
    user: process.env.AMSTRAM_USER,
    host: process.env.AMSTRAM_HOST,
    database: process.env.AMSTRAM_DATABASE,
    password: process.env.AMSTRAM_PASSWORD,
    port: process.env.AMSTRAM_PORT,
});

connexion.connect(function(err) {
    if (err) {
        console.error('Connexion error :', err);
        process.exit(1);
    }
    console.log('Database connected!')
})

module.exports = connexion;