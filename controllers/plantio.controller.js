var mysql = require('mysql');
var config = require('../helpers/config');
var connection = mysql.createConnection(config);

//Devuelve todos los registros de autos
module.exports.plants_list = (request, response) => {
    var sql = 'SELECT * FROM planta';
    connection.query(sql, (error, results, fields) => {
        if(error) {
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.get_plant = (request, response) => {
    var sql = 'SELECT * FROM planta WHERE idPlanta = ?';
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error){
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.get_tempAir = (request, response) => {
    var sql = 'SELECT * FROM sensortemperatura WHERE indiceTemp = ?';
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error){
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.get_humAir = (request, response) => {
    var sql = 'SELECT * FROM sensortemperatura WHERE humedadAmbiental = ?';
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error){
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.get_humSoil = (request, response) => {
    var sql = 'SELECT * FROM sensorhumedad WHERE indiceHumedad = ?';
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error){
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.get_light = (request, response) => {
    var sql = 'SELECT * FROM sensorluz WHERE indiceLuz = ?';
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error){
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.insert_planta = (request, response) => {
    //request.body contiene los datos del auto en
    //formato JSON -> se lo envia al cliente
    var plantio = request.body;
    //var sql = 'INSERT INTO cars VALUES(?,?,?,?)'
    var sql = 'INSERT INTO planta SET ?';
    connection.query(sql,
    [plantio],
    (error, results, fields) => {
        if (error) {
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.insert_sensorhumedad = (request, response) => {
    //request.body contiene los datos del auto en
    //formato JSON -> se lo envia al cliente
    var plantio = request.body;
    //var sql = 'INSERT INTO cars VALUES(?,?,?,?)'
    var sql = 'INSERT INTO sensorhumedad SET ?';
    connection.query(sql,
    [plantio],
    (error, results, fields) => {
        if (error) {
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.insert_sensorluz = (request, response) => {
    //request.body contiene los datos del auto en
    //formato JSON -> se lo envia al cliente
    var plantio = request.body;
    //var sql = 'INSERT INTO cars VALUES(?,?,?,?)'
    var sql = 'INSERT INTO sensorluz SET ?';
    connection.query(sql,
    [plantio],
    (error, results, fields) => {
        if (error) {
            response.send(error);
        } else {
            response.json(results);
        }
    });
}

module.exports.insert_sensortemperatura = (request, response) => {
    //request.body contiene los datos del auto en
    //formato JSON -> se lo envia al cliente
    var plantio = request.body;
    //var sql = 'INSERT INTO cars VALUES(?,?,?,?)'
    var sql = 'INSERT INTO sensortemperatura SET ?';
    connection.query(sql,
    [plantio],
    (error, results, fields) => {
        if (error) {
            response.send(error);
        } else {
            response.json(results);
        }
    });
}


