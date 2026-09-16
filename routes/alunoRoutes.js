const express = require('express');
const controller = require('../controllers/alunoController');
const router = express.Router();

router.use(controller.autenticar);
router.get('/', controller.painel);

module.exports = router;
