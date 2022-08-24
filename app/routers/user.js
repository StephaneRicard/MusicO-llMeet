const express = require('express');

const { userController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { authenticateToken } = require('../middlewares/jwt');

// TODO: acces a donner

const router = express.Router();

router
    .route('/')
    .get(authenticateToken, controllerHandler(controller.getOne))
    .delete(authenticateToken, controllerHandler(controller.delete))
    // a revoir ne marche pas
    .patch(authenticateToken, controllerHandler(controller.update));

module.exports = router;
