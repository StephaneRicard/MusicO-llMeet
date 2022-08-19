const { momerDatamapper } = require('../models/momer');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer la liste de tous les momers
    async getAll(_req, res) {
        const momers = await momerDatamapper.findAll();
        return res.json(momers);
    },
    // récupérer 1 momer
    async getOne(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('momer not found', { statusCode: 404 });
        }
        return res.json(momer);
    },
    // supprimer 1 momer
    async delete(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('momer does not exists', { statusCode: 404 });
        }
        return res.json();
    },
    // mettre à jour 1 momer
    async update(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);
        if (!momer) {
            throw new ApiError('Momer does not exists', { statusCode: 404 });
        }
        const savedMomer = await momerDatamapper.update(momerId, req.body);
        return res.json(savedMomer);
    },
};
