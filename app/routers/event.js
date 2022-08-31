const express = require('express');

const { eventController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne));

router.route('/:id/upload')
    .patch(controllerHandler(controller.uploadImage));

module.exports = router;
