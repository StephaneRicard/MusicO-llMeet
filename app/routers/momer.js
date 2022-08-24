const express = require('express');

const { momerController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

// TODO: acces a donner

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne));

module.exports = router;
