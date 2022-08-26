const express = require('express');

const { myeventController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { accessMomer } = require('../middlewares/accessRole');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne))
    .delete(accessMomer, controllerHandler(controller.delete))
    .patch(accessMomer, controllerHandler(controller.update));

module.exports = router;
