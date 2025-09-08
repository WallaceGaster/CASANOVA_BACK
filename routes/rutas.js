const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const colindanciaController = require('../controllers/colindanciaController');
const inventarioController = require('../controllers/inventarioController');
const coordenadaController = require('../controllers/coordenadaController');
const cotizacionController = require('../controllers/cotizacionController');
const imagenMapaController = require('../controllers/imagenMapaController');

router.get('/getColindanciaById/:id',colindanciaController.getColindanciaById);
router.post('/postColindanciaById',colindanciaController.postColindanciaById);
router.post('/addColindancia',colindanciaController.addColindancia);
router.get('/getColindanciasPorId/:id',colindanciaController.getColindanciasById);

router.post('/addUser',userController.addUser);
router.get('/getUsers',userController.getUsers);
router.post('/authUser',userController.authUser);
router.post('/getUser',userController.getUserRegex);
router.post('/getUserById',userController.getUserById);
router.delete('/deleteUser/:id',userController.deleteUser);
router.get('/getVendors',userController.getVendors);




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


router.post('/addCoordenada',coordenadaController.addCoordenada);
router.delete('/deleteCoordenada',coordenadaController.eliminarPorId);
router.get('/getCoordenadas/:id',coordenadaController.buscarCoordenadasPorIdMapa);
router.put('/putNombreLote/',coordenadaController.actualizarNombreLote);
router.put('/putIdInventario',coordenadaController.actualizarIdInventario);
router.put('/putEstadoLote/',coordenadaController.actualizarEstadoLote);
router.post('/postCoordenadaPorId',coordenadaController.buscarCoordenadaPorId);

router.post('/addCotizacion',cotizacionController.addCotizacion);
router.post('/borrarCotizacionPorIdUsuario',cotizacionController.borrarCotizacionPorIdUsuario);
router.post('/getCotizacionPorIdCotizacion',cotizacionController.buscarCotizacionPorIdCotizacion);
router.post('/getCotizacionPorIdUsuario',cotizacionController.buscarCotizacionPorIdUsuario);


router.post('/addUrlMapa',imagenMapaController.addMapa);
router.get('/getUrlMapas',imagenMapaController.getMapas);

module.exports = router;


