const { momerDatamapper } = require('../models/user');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    async getAll(_req, res) {
        const momers = await momerDatamapper.findAll();
        return res.json(momers);
    },

    async getOne(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('momer not found', { statusCode: 404 });
        }
        return res.json(momer);
    },

    // eslint-disable-next-line no-unused-vars
    async delete(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('momer does not exists', { statusCode: 404 });
        }
    },
};
