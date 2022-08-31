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
    .route('/:id/:applicationId')
    .get(controllerHandler(controller.getApplicationDetails))
    .patch(controllerHandler(controller.updateCandidateStatus));

router
    .route('/:id/:applicationId/contact')
    .post(controllerHandler(controller.sendEmail));

module.exports = router;
