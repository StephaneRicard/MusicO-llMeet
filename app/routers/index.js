// centralisation des routers
const express = require('express');

const momerRouter = require('./momer');
const musicosRouter = require('./musicos');
const eventRouter = require('./event');
const adRouter = require('./ad');

const router = express.Router();

router.use('/momers', momerRouter);
router.use('/musicos', musicosRouter);
router.use('/ads', adRouter);
router.use('/', eventRouter);

module.exports = router;
