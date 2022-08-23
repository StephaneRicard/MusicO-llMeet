const express = require('express');

const { momerController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
// const { accessMomer, accessMusicos } = require('../middlewares/accessRole');
// const { filterHelper } = require('../services/filters');

// TODO: acces a donner

const router = express.Router();

router
    .route('/')
    // .get(controllerHandler(controller.getAll));
    .get(controllerHandler(controller.filtersCounty));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne))
    .delete(controllerHandler(controller.delete))
    .patch(controllerHandler(controller.update));

module.exports = router;
