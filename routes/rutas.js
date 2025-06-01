const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const colindanciaController = require('../controllers/colindanciaController');
const inventarioController = require('../controllers/inventarioController');

router.get('/getColindanciaById/:id',colindanciaController.getColindanciaById);
router.post('/postColindanciaById',colindanciaController.postColindanciaById);
router.post('/addColindancia',colindanciaController.addColindancia);
router.get('/getColindanciasPorId/:id',colindanciaController.getColindanciasById);


module.exports = router;


