const express = require('express');

const { myAdsController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const validate = require('../validation/validator');
const eventUpdateSchema = require('../validation/schemas/eventUpdateSchema');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll));

router
    .route('/:id(\\d+)')
    .get(controllerHandler(controller.getOne))
    .delete(controllerHandler(controller.delete))
    .patch(controllerHandler(controller.update));

router
    .route('/:id(\\d+)/:applicationId(\\d+)')
    .get(controllerHandler(controller.getApplicationDetails))
    .patch(controllerHandler(controller.updateCandidateStatus));

router
    .route('/:id(\\d+)/:applicationId(\\d+)/contact')
    .post(controllerHandler(controller.sendEmail));

module.exports = router;
