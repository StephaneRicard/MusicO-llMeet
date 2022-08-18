const express = require('express');

const momerController = require('../controllers/momer');
const authentification = require('../controllers/user');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/momers')
    .get(controllerHandler(momerController.getAll));

router
    .route('/momers/:id')
    .get(controllerHandler(momerController.getOne))
    .delete(controllerHandler(momerController.delete));

router
    .route('/api/login')
    .post(controllerHandler(authentification.apiLogin));

// login
// router.post('/api/login', controllerHandler(authentification.apiLogin));

// refresh token
router.get('/api/refreshToken', controllerHandler(authentification.apiRefresh));

module.exports = router;
