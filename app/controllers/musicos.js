const { musicosDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    async getAll(_req, res) {
        const musicos = await musicosDatamapper.findAll();
        return res.json(musicos);
    },

    async getOne(req, res) {
        const musicosId = req.params.id;
        const musicos = await musicosDatamapper.findOne(musicosId);

        if (!musicos) {
            throw new ApiError('musicos not found', { statusCode: 404 });
        }
        return res.json(musicos);
    },

    // eslint-disable-next-line no-unused-vars
    async delete(req, res) {
        const musicosId = req.params.id;
        const musicos = await musicosDatamapper.findOne(musicosId);

        if (!musicos) {
            throw new ApiError('musicos does not exists', { statusCode: 404 });
        }
    },
};
