const http = require('http');
require('dotenv').config();
const express = require('express');

const app = express();
const debug = require('debug')('app:server');

const port = process.env.PORT || 3005;

const server = http.createServer(app);

server.listen(port, () => {
    debug(`Listening on ${port}`);
});
