// centralisation des controllers
const momerController = require('./momer');
const musicosController = require('./musicos');
const eventController = require('./event');
const adController = require('./ad');
const userController = require('./user');

module.exports = {
    momerController,
    musicosController,
    eventController,
    adController,
    userController,
};
