const { response } = require('express');
var express = require('express');
var router = express.Router();

//
// GET
// POST      registrar
// PUT       update
// DELETE    borrar

router.get('/', (request, response) => {
    response.send('Home page');
});

module.exports = router;