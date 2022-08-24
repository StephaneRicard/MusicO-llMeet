// centralisation des routers
const express = require('express');

const controllerHandler = require('../helpers/controllerHandler');
const { userController } = require('../controllers');
const { errorHandler } = require('../helpers/errorHandler');

// importation des routers
const musicosRouter = require('./musicos');
const eventRouter = require('./event');
const adRouter = require('./ad');
const userRouter = require('./user');
const momerRouter = require('./momer');
const myAdsRouter = require('./myAds');

// middleware d'autentification du token
const { authenticateToken } = require('../middlewares/jwt');
// middleware de vérification du role en fonction de la route
const { accessMomer, accessMusicos } = require('../middlewares/accessRole');

const router = express.Router();

// registration
router.post('/api/signup', controllerHandler(userController.registerUser));
// login
router.post('/api/signin', controllerHandler(userController.loginUser));
// logout
router.get('/api/logout', userController.logout);

// on ajoute l'autentification token sur les routes qui nécessite d'être connecté
// momers list
router.use('/api/momers', authenticateToken, accessMusicos, momerRouter);
// musicos list
router.use('/api/musicos', authenticateToken, accessMomer, musicosRouter);
// ads list
router.use('/api/ads', authenticateToken, accessMomer, adRouter);
// router users
router.use('/api/profile', authenticateToken, userRouter);
// route mes annonces
router.use('/api/myads', authenticateToken, myAdsRouter);
// events list
router.use('/api', eventRouter);
// gestion des erreurs
router.use(errorHandler);

module.exports = router;
