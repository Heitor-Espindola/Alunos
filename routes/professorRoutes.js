const express = require('express');
const controller = require('../controllers/professorController');
const router = express.Router();

router.use(controller.autenticar);
router.get('/', controller.painel);
router.post('/nota', controller.salvarNota);

module.exports = router;
