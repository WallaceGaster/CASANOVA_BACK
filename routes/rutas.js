const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const colindanciaController = require('../controllers/colindanciaController');
const inventarioController = require('../controllers/inventarioController');

router.get('/getColindanciaById/:id',colindanciaController.getColindanciaById);
router.post('/postColindanciaById',colindanciaController.postColindanciaById);
router.post('/addColindancia',colindanciaController.addColindancia);
router.get('/getColindanciasPorId/:id',colindanciaController.getColindanciasById);



router.post('/addInventario',inventarioController.addInventario);
router.get('/getConteoStatus',inventarioController.getConteoStatus);
router.post('/updateInventario',inventarioController.updateInventario);
router.post('/borrarInv',inventarioController.borrarInv);
router.get('/getInventarios',inventarioController.getInventarios);
router.get('/getInventariosDisponibles',inventarioController.getInventariosDisponibles);
router.get('/getInventarioPorId/:id',inventarioController.getInventarioPorId);
router.put('/putColindancias',inventarioController.assignColindancias);
router.post('/postAssignCoordenada', inventarioController.assignCoordenada);
router.put('/putCambiarEstado/:id', inventarioController.cambiarEstado);
router.get('/getEtapasDesarrollo',inventarioController.getEtapasDesarrollo);
router.get('/getotalventas',inventarioController.getotalventas);


module.exports = router;


