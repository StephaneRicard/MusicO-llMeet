const { eventDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer la liste de tous les events
    async getAll(_req, res) {
        const events = await eventDatamapper.findAll();
        return res.json(events);
    },
    // récupérer 1 event
    async getOne(req, res) {
        const eventId = req.params.id;
        const event = await eventDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('event not found', { statusCode: 404 });
        }
        return res.json(event);
    },
    // supprimer 1 event
    async delete(req, res) {
        const eventId = req.params.id;
        const event = await eventDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('event does not exists', { statusCode: 404 });
        }
        return res.json();
    },

};
