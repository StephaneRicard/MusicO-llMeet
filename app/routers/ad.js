const express = require('express');

const { adController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { accessMomer, accessMusicos } = require('../middlewares/accessRole');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll))
    .post(accessMomer, controllerHandler(controller.createEvent));

router
    .route('/:id')
    .post(accessMusicos, controllerHandler(controller.createApplication))
    .get(controllerHandler(controller.getOne));

router
    .route('/:id/contact')
    .post(accessMusicos, controllerHandler(controller.sendEmail));

module.exports = router;
