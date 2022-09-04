const express = require('express');

const { myeventController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { accessMomer } = require('../middlewares/accessRole');
const validate = require('../validation/validator');
const eventUpdateSchema = require('../validation/schemas/eventUpdateSchema');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll));

router
    .route('/:id(\\d+)')
    .get(controllerHandler(controller.getOne))
    .delete(accessMomer, controllerHandler(controller.delete))
    .patch(accessMomer, validate('body', eventUpdateSchema), controllerHandler(controller.update));

module.exports = router;
