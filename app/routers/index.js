const express = require('express');

const { momerController: controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Pour authentification
const {
    getIndex,
    setIndex,
    updateIndex,
    deleteIndex,
} = require('../controllers/indexController');

const {
    protect,
} = require('../errors/authentificationError');

router
    .route('/momers')
    .get(controllerHandler(controller.getAll));

router
    .route('/momers/:id')
    .get(controllerHandler(controller.getOne))
    .delete(controllerHandler(controller.delete));

router.route('/').get(protect, getIndex).post(protect, setIndex);
router.route('/:id').delete(protect, deleteIndex).put(protect, updateIndex);
    
module.exports = router;
