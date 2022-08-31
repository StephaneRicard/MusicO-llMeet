const bunyan = require('bunyan');

const streams = [{
    level: 'error',
    path: './log/error.log',
    type: 'rotating-file',
    period: '1d',
    count: 3,
}];

module.exports = bunyan.createLogger({
    name: 'musical',
    streams,
});
