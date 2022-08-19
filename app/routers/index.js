const express = require('express');

const momerRouter = require('./momer');
const controllerHandler = require('../helpers/controllerHandler');
const user = require('../controllers/user');

const router = express.Router();

router.use('/momers', momerRouter);

// router.post('/api/login', controllerHandler(authentification.apiLogin));
router.get('/api/login/:id', controllerHandler(user.getOneByEmail));

router.post('/api/registration', controllerHandler(user.authentification.apiRegistration));

module.exports = router;
