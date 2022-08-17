const express = require('express');

const { momerController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/momers')
    .get(controllerHandler(controller.getAll));

router
    .route('/momers/:id')
    .get(controllerHandler(controller.getOne))
    .delete(controllerHandler(controller.delete));

module.exports = router;
