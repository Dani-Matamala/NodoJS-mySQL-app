const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', async (req, res) => {
    const links = await pool.query('SELECT * FROM links');
    console.log(links);
    res.render('aqui iran los links');
})

router.get('/add', (req, res) => {
    res.render('links/add')
})

// insercion de nuevo link a la base de datos
router.post('/add', async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url, 
        description
    };
    console.log(newLink);
    await pool.query('INSERT INTO links set ?', [newLink]);
    res.send('recibido');
});

module.exports = router;