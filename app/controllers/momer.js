const { momerDatamapper } = require('../models');
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
    // supprimer 1 momer (de la table users et supprimer ses event)
    async delete(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('momer does not exists', { statusCode: 404 });
        }

        await momerDatamapper.delete(momerId);
        return res.status(204).json('delete ok');
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
