const express = require('express');
const cors = require('cors');
const logger = require('./helpers/logger');

process.on('unhandledRejection', (err) => {
    throw err;
});

process.on('uncaughtException', (err) => {
    logger.info(err);
    process.exit(0);
});

const router = require('./routers');

const app = express();
// On active le middleware pour parser le payload JSON
app.use(express.json({ limit: '50mb' }));
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
}));

// On lève la restriction CORS
app.use(cors(process.env.CORS_DOMAINS || '*'));

app.use(router);

module.exports = app;
