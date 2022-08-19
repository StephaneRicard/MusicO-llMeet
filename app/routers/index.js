// centralisation des routers
const express = require('express');

const momerRouter = require('./momer');
const musicosRouter = require('./musicos');
const eventRouter = require('./event');

const router = express.Router();

router.use('/momers', momerRouter);
router.use('/musicos', musicosRouter);
router.use('/events', eventRouter);

module.exports = router;
