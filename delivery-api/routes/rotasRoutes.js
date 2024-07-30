const express = require('express');
const router = express.Router();
const rotasController = require('../controllers/rotasController');

router.get('/', rotasController.getRotas);
router.post('/', rotasController.createRota);
router.get('/melhor-rota/:id', rotasController.getMelhorRota);

module.exports = router;
