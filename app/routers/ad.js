const express = require('express');

const { adController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll))
    .post(controllerHandler(controller.create));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne));

module.exports = router;
