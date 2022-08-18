const http = require('http');
require('dotenv').config();
const express = require('express');

const app = express();
const debug = require('debug')('app:server');

const { errorHandler } = require('./app/errors/apiError');

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/api/login', require('./app/routers/user'));

app.use('/api/refreshToken', require('./app/routers/user'));

const port = process.env.PORT || 3005;

app.use(errorHandler);

const server = http.createServer(app);

server.listen(port, () => {
    debug(`Listening on ${port}`);
});
