const { musicosDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer la liste de tous les musicos
    async getAll(_req, res) {
        const musicos = await musicosDatamapper.findAll();
        return res.json(musicos);
    },
    // récupérer 1 musicos
    async getOne(req, res) {
        const musicosId = req.params.id;
        const musicos = await musicosDatamapper.findOne(musicosId);

        if (!musicos) {
            throw new ApiError('musicos not found', { statusCode: 404 });
        }
        return res.json(musicos);
    },

    // supprimer 1 musicos
    async delete(req, res) {
        const musicosId = req.params.id;
        const musicos = await musicosDatamapper.findOne(musicosId);

        if (!musicos) {
            throw new ApiError('musicos does not exists', { statusCode: 404 });
        }

        await musicosDatamapper.delete(musicosId);
        return res.status(204).json('delete ok');
    },

    // mettre à jour 1 musicos
    async update(req, res) {
        const musicosId = req.params.id;
        const musicos = await musicosDatamapper.findOne(musicosId);

        if (!musicos) {
            throw new ApiError('musicos does not exists', { statusCode: 404 });
        }
        // on met à jour la table users avec les infos de req.body
        const savedMusicos = await musicosDatamapper.updateUsers(musicosId, req.body);

        // si les musical type sont modifiés on supprime les musical
        // type qui était présent dans la table de liaison
        if (req.body.musical_type) {
            await musicosDatamapper.deleteMusicalType(musicosId);

            // on rajoute les nouveaux dans la table de liaison
            req.body.musical_type.forEach(
                async (musicalType) => {
                    await musicosDatamapper.updateMusicalType(musicalType, musicosId);
                },
            );
        }
        // on renvoie la table users mise a jour
        return res.json({ savedMusicos });
    },
};
