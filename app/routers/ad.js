const express = require('express');

const { adController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { accessMusicos, accessMomer } = require('../middlewares/accessRole')

const router = express.Router();

router
    .route('/')
    .get(accessMusicos, controllerHandler(controller.getAll))
    .post(accessMomer, controllerHandler(controller.create));

router
    .route('/:id')
    .get(accessMusicos, controllerHandler(controller.getOne));

module.exports = router;
