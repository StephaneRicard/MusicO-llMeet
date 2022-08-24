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
};
