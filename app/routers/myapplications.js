const express = require('express');

const { myapplicationsController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll));

router
    .route('/:id(\\d+)')
    .get(controllerHandler(controller.getOne))
    .delete(controllerHandler(controller.delete));

module.exports = router;
