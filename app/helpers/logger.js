const bunyan = require('bunyan');

const streams = [{
    level: 'error',
    path: './log/error.log',
    type: 'rotating-file',
    period: '1d',
    count: 3,
}];

if (process.env.NODE_ENV !== 'production') {
    streams.push({
        level: 'info',
        stream: process.stdout,
    });
}

module.exports = bunyan.createLogger({
    name: 'musicalLog',
    streams,
});
