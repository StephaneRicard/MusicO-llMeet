const debug = require('debug')('app: test');

module.exports = {

    // donner l'accès des aux routes destinées au momers seulement
    accessMomer(req, res, next) {
        const { user } = req;
        const { role } = user;
        debug(role);

        if (role !== 'momer') {
            throw new Error('Not Authorized, you are not a momer');
        }

        next();
    },

    // donner l'accès des aux routes destinées au musicos seulement
    accessMusicos(req, res, next) {
        const { user } = req;
        const { role } = user;
        debug(role);

        if (role !== 'musicos') {
            throw new Error('Not Authorized, you are not a musicos');
        }

        // on passe la suite au controller
        next();
    },
};
