// centralisation des routers
const express = require('express');

const momerRouter = require('./momer');
const musicosRouter = require('./musicos');

const router = express.Router();

router.use('/momers', momerRouter);
router.use('/musicos', musicosRouter);

module.exports = router;
