// centralisation des routers
const express = require('express');

const controllerHandler = require('../helpers/controllerHandler');
const { userController } = require('../controllers');
const { errorHandler } = require('../helpers/errorHandler');

// importation des routers
const musicosRouter = require('./musicos');
const eventRouter = require('./event');
const myeventsRouter = require('./myevents');
const adRouter = require('./ad');
const userRouter = require('./user');
const momerRouter = require('./momer');
const myAdsRouter = require('./myAds');
const myapplicationsRouter = require('./myapplications');
const contactController = require('./contact');

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
router.get('/api/logout', authenticateToken, userController.logout);
// contact
router.post('/api/contact', controllerHandler(contactController.contactForm));

// on ajoute l'autentification token sur les routes qui nécessite d'être connecté
// momers list
router.use('/api/momers', authenticateToken, accessMusicos, momerRouter);
// momer list of ads
router.use('/api/myads', authenticateToken, accessMomer, myAdsRouter);
// musicos list
router.use('/api/musicos', authenticateToken, accessMomer, musicosRouter);
// ads list
router.use('/api/ads', authenticateToken, adRouter);
// router profile de la personne connectee
router.use('/api/profile', authenticateToken, userRouter);
// my applications list
router.use('/api/myapplications', authenticateToken, accessMusicos, myapplicationsRouter);
// my events list
router.use('/api/myevents', authenticateToken, myeventsRouter);

// events list
router.use('/api', eventRouter);
// gestion des erreurs
router.use(errorHandler);

module.exports = router;
