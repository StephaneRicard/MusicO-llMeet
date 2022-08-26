const express = require('express');

const { adController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { accessMomer } = require('../middlewares/accessRole')

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll))
    .post(accessMomer, controllerHandler(controller.create));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne));

module.exports = router;
