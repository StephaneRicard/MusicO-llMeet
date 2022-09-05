const express = require('express');

const { userController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { authenticateToken } = require('../middlewares/jwt');
const userUpdateSchema = require('../validation/schemas/userUpdateSchema');
const validate = require('../validation/validator');

const router = express.Router();

router
    .route('/')
    .get(authenticateToken, controllerHandler(controller.getOne))
    .delete(authenticateToken, controllerHandler(controller.delete))
    .patch(authenticateToken, validate('body', userUpdateSchema), controllerHandler(controller.update));

router.route('/upload')
    .patch(authenticateToken, controllerHandler(controller.uploadImage));

module.exports = router;
