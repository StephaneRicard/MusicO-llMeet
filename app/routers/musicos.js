const express = require('express');

const { musicosController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne))
    .post(controllerHandler(controller.sendEmail));

module.exports = router;
