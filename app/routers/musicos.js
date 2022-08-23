const express = require('express');

const { musicosController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
// const { accessMomer, accessMusicos } = require('../middlewares/accessRole');

// TODO: acces a donner

const router = express.Router();

router
    .route('/')
    // .get(controllerHandler(controller.getAll));
    .get(controllerHandler(controller.filters));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne))
    .delete(controllerHandler(controller.delete))
    .patch(controllerHandler(controller.update));

module.exports = router;
