const express = require('express');

const { userController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { authenticateToken } = require('../middlewares/jwt');

const router = express.Router();

router
    .route('/')
    .get(authenticateToken, controllerHandler(controller.getOne))
    .delete(authenticateToken, controllerHandler(controller.delete))
    .patch(authenticateToken, controllerHandler(controller.update));

module.exports = router;
