const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', function (req, res) {
    res.render('links/add')
})

router.post('/add', function (req, res) {
    res.send('recibido');
});

module.exports = router;