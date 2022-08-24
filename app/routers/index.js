// centralisation des routers
const express = require('express');

const momerRouter = require('./momer');
const controllerHandler = require('../helpers/controllerHandler');
const { userController } = require('../controllers');
const { errorHandler } = require('../helpers/errorHandler');

// middleware d'autentification du token
const { authenticateToken } = require('../middlewares/jwt');

const router = express.Router();

const musicosRouter = require('./musicos');
const eventRouter = require('./event');
const adRouter = require('./ad');
const myapplicationsRouter = require('./myapplications');

// registration
router.post('/api/signup', controllerHandler(userController.registerUser));
// login
router.post('/api/signin', controllerHandler(userController.loginUser));
// logout
router.get('/api/logout', userController.logout);

// on ajoute l'autentification token sur les routes qui nécessite d'être connecté
// momers list
router.use('/api/momers', authenticateToken, momerRouter);
// musicos list
router.use('/api/musicos', authenticateToken, musicosRouter);
// ads list
router.use('/api/ads', authenticateToken, adRouter);
// my applications list
router.use('/api/myapplications', authenticateToken, myapplicationsRouter);
// events list
router.use('/api', eventRouter);

router.use(errorHandler);

module.exports = router;
