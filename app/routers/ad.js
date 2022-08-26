const express = require('express');

const { adController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
<<<<<<< HEAD
const { accessMusicos, accessMomer } = require('../middlewares/accessRole')
=======
const { accessMomer } = require('../middlewares/accessRole');
>>>>>>> 8fc19b0561c1436547d13b6390aaa6a3931ecedf

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.getAll))
    .post(accessMomer, controllerHandler(controller.create));

router
    .route('/:id')
    .get(controllerHandler(controller.getOne));

module.exports = router;
