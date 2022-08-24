// centralisation des controllers
const momerController = require('./momer');
const musicosController = require('./musicos');
const eventController = require('./event');
const adController = require('./ad');
const myapplicationsController = require('./myapplications');
const userController = require('./user');

module.exports = {
    momerController,
    musicosController,
    eventController,
    adController,
    myapplicationsController,
    userController,
};
