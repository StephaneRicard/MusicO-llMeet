const express = require('express');

const { myAdsController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne))
    .delete(controllerHandler(controller.delete))
    .patch(controllerHandler(controller.update));

router
    .route('/:id/details/:userId')
    .get(controllerHandler(controller.getApplicationDetails));

module.exports = router;
