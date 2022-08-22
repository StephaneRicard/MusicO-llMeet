const debug = require('debug')('app: test');

module.exports = {

    // donner l'accès des aux routes destinées au momers seulement
    accessMomer(req, res, next) {
        const user = JSON.stringify(req.user)[0][1];
        const { role } = user;
        debug(role);

        if (role !== 'momer') {
            throw new Error('Not Authorized');
        }

        next();
    },

    // donner l'accès des aux routes destinées au musicos seulement
    accessMusicos(req, res, next) {
        const user = Object.entries(req.user)[0][1];
        const { role } = user;
        debug(role);

        if (role !== 'musicos') {
            throw new Error('Not Authorized');
        }

        // on passe la suite au controller
        next();
    },
};
