const express = require('express');

const { adController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { accessMomer, accessMusicos } = require('../middlewares/accessRole');
const validate = require('../validation/validator');
const eventCreateSchema = require('../validation/schemas/eventCreateSchema');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll))
    .post(accessMomer, validate('body', eventCreateSchema), controllerHandler(controller.createEvent));

router
    .route('/:id(\\d+)')
    .post(accessMusicos, controllerHandler(controller.createApplication))
    .get(controllerHandler(controller.getOne));

module.exports = router;
