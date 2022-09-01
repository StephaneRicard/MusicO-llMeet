// centralisatisation de la gestion des erreurs
const ApiError = require('../errors/apiError');
const logger = require('./logger');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _, res, next) => {
    logger.error(err);
    const { message } = err;
    let statusCode = err.infos?.statusCode;

    if (!statusCode || Number.isNaN(Number(statusCode))) {
        statusCode = 500;
    }

    if (res.get('Content-type')?.includes('html')) {
        res.status(statusCode).render('error', {
            statusCode,
            message,
            title: `Error ${err.statusCode}`,
        });
    } else {
        res.status(statusCode).json({
            status: 'error',
            statusCode,
            message,
        });
    }
};

module.exports = {
    ApiError,
    errorHandler,
};
