var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');
var cars = require('./routes/cars');
var plantio = require('./routes/plantio');

//http://localhost:8020/
var port = 8020;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/frontend'));
// https://iot.omarquintero.com/equipo2

app.use('/', index);
app.use('/api', cars);
app.use('/api2', plantio)

/*function miFuncion(port){
    console.log('El servidor inicio en el puerto ' + port)
}

var miFuncion2 = (port) => {
    console.log('El servidor inicio en el puerto ' + port)
}*/

app.listen(port, () => {
    console.log('El servidor inicio en el puerto ' + port);
})

//app.listen(port, funcion(port));