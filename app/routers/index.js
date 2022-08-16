const express = require('express');

const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

// Mettre les routes ici

router.use(errorHandler);

module.exports = router;
