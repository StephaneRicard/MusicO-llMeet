const { myapplicationsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
// const client = require('../client/pg');

module.exports = {

    // list getAll & filters
    // eslint-disable-next-line consistent-return
    async getAll(req, res) {
        const myUserId = req.user.id;
        if (!myUserId) {
            throw new ApiError('Error on User id -> "myUserId"', myUserId, { statusCode: 404 });
        }
        console.log('Id of the user :', myUserId);
        const myApplications = await myapplicationsDatamapper.findAll(myUserId);
        return res.json(myApplications);
    },
    // récupérer 1 annonce
    async getOne(req, res) {
        const myUserId = req.user.id;
        if (!myUserId) {
            throw new ApiError('Error on User id -> "myUserId"', myUserId, { statusCode: 404 });
        }

        const myApplicationId = req.params.id;
        const myApplication = await myapplicationsDatamapper.findOne(myUserId, myApplicationId);
        if (!myApplication) {
            throw new ApiError('Can not find any anything for this id', myApplicationId, { statusCode: 404 });
        }
        return res.json(myApplication);
    },
    // supprimer 1 annonce
    async delete(req, res) {
        const myUserId = req.user.id;
        if (!myUserId) {
            throw new ApiError('Error on User id -> "myUserId"', myUserId, { statusCode: 404 });
        }

        const myApplicationId = req.params.id;
        const myApplication = await myapplicationsDatamapper.findOne(myUserId, myApplicationId);
        if (!myApplication) {
            throw new ApiError('Application does not find anything for this userId', myApplicationId, { statusCode: 404 });
        }

        await myapplicationsDatamapper.delete(myUserId, myApplicationId);
        return res.status(204).json('delete ok');
    },
};
