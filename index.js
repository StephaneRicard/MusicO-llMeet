const http = require('http');
require('dotenv').config();
const logger = require('./app/helpers/logger');
const app = require('./app');

const port = process.env.PORT || 3003;

const server = http.createServer(app);

server.listen(port, () => {
    logger.info(`Listening on ${port}`);
});
