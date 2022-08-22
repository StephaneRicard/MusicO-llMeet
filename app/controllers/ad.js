const { adDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer la liste de toutes les annonces
    async getAll(_req, res) {
        const events = await adDatamapper.findAll();
        return res.json(events);
    },
    // récupérer 1 annonce
    async getOne(req, res) {
        const eventId = req.params.id;
        const event = await adDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('event not found', { statusCode: 404 });
        }
        return res.json(event);
    },
    // supprimer 1 annonce
    async delete(req, res) {
        const eventId = req.params.id;
        const event = await adDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('ad does not exists', { statusCode: 404 });
        }

        await adDatamapper.delete(eventId);
        return res.status(204).json('delete ok');
    },

    // TODO: ajouter condition à la création (champs requis)
    // créer un event (appelé annonce)
    async create(req, res) {
        const savedAd = await adDatamapper.insert(req.body);
        res.json(savedAd);
    },

};
