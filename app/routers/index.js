// centralisation des routers
const express = require('express');

const momerRouter = require('./momer');
const controllerHandler = require('../helpers/controllerHandler');
const { authentification } = require('../controllers/user');
// const { protect } = require('../helpers/authHandler');

const router = express.Router();

const musicosRouter = require('./musicos');
const eventRouter = require('./event');
const adRouter = require('./ad');

// registration
router.post('/signup', controllerHandler(authentification.registerUser));
// login
router.post('/signin', controllerHandler(authentification.loginUser));

// momers list
router.use('/momers', momerRouter);
// musicos list
router.use('/musicos', musicosRouter);
// ads list
router.use('/ads', adRouter);
// events list
router.use('/', eventRouter);

module.exports = router;
