const { myapplicationsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
// const client = require('../client/pg');

module.exports = {

    async getAll(req, res) {
        const myUserId = req.user.id;

        const myApplications = await myapplicationsDatamapper.findAll(myUserId);

        return res.json(myApplications);
    },
    // récupérer 1 candidature
    async getOne(req, res) {
        const myUserId = req.user.id;
        const myApplicationId = req.params.id;

        const myApplication = await myapplicationsDatamapper.findOne(myUserId, myApplicationId);
        console.log(myApplication);
        if (!myApplication) {
            throw new ApiError('Can not find any anything for this id', myApplicationId, { statusCode: 404 });
        }
        return res.json(myApplication);
    },
    // supprimer 1 candidature
    async delete(req, res) {
        const myUserId = req.user.id;
        const myApplicationId = req.params.id;

        const myApplication = await myapplicationsDatamapper.findOne(myUserId, myApplicationId);

        if (!myApplication) {
            throw new ApiError('Application does not find anything for this userId', myApplicationId, { statusCode: 404 });
        }

        await myapplicationsDatamapper.delete(myUserId, myApplicationId);
        return res.json('delete ok');
    },
};
