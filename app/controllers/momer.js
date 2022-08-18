const { momerDatamapper } = require('../models');
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

    async delete(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('momer does not exists', { statusCode: 404 });
        }
        return res.json();
    },

    async update(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);
        if (!momer) {
            throw new ApiError('Momer does not exists', { statusCode: 404 });
        }
        const savedUser = await momerDatamapper.update(momerId, req.body);
        return res.json(savedUser);
    },
};
