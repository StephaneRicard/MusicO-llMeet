const express = require('express');

const momerRouter = require('./momer');
const { authentification } = require('../controllers/user');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.use('/momers', momerRouter);

router.post('/api/login', controllerHandler(authentification.apiLogin));

router.post('/api/registration', controllerHandler(authentification.apiRegistration));

module.exports = router;
