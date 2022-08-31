const express = require('express');

const { contactController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/')
    .post(controllerHandler(controller.postForm));

module.exports = router;
