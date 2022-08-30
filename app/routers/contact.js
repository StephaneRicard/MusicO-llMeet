const express = require('express');

const { contactController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/contact')
    .post(controllerHandler(controller.contactForm));

module.exports = router;
