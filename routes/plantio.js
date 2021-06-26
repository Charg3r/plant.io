var express = require('express');
var router = express.Router();

var controller = require('../controllers/plantio.controller');


//localhost:8020/api/cars
router.get('/plantio', controller.plants_list);
router.get('/plantio/:id', controller.get_plant);
router.get('/humedad/:id', controller.get_humAir);
router.get('/suelo/:id', controller.get_humSoil);
router.get('/foto/:id', controller.get_light);
router.get('/temp/:id', controller.get_tempAir);
router.post('/plantio', controller.insert_planta);
router.post('/humedad', controller.insert_sensortemperatura);
router.post('/suelo', controller.insert_sensorhumedad);
router.post('/foto', controller.insert_sensorluz);

module.exports = router;