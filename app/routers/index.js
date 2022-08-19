const express = require('express');

const momerRouter = require('./momer');
const controllerHandler = require('../helpers/controllerHandler');
const { authentification } = require('../controllers/user');

const router = express.Router();

// momers list
router.use('/momers', momerRouter);
// registration
router.post('/signup', controllerHandler(authentification.registerUser));
// login
router.post('/signin', controllerHandler(authentification.loginUser));

module.exports = router;
