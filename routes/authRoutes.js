const express = require('express');
const controller = require('../controllers/authController');
const router = express.Router();

router.get('/', (req, res) => res.sendFile('index.html', { root: './views' }));
router.post('/login', controller.login);
router.get('/logout', controller.logout);

module.exports = router;
