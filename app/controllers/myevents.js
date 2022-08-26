const { myeventsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer mes annonces
    async getAll(req, res) {
        const myId = req.user.id;

        const myEvents = await myeventsDatamapper.findAll(myId);

        return res.json(myEvents);
    },

    // récupérer 1 event parmis la liste de mes events
    async getOne(req, res) {
        const myUserId = req.user.id;
        const myEventId = req.params.id;

        const myEvent = await myeventsDatamapper.findOne(myUserId, myEventId);

        if (!myEvent) {
            throw new ApiError('Can not find anything for this id', myEventId, { statusCode: 404 });
        }

        return res.json(myEvent);
    },

    // supprimer l'un de mes events
    async delete(req, res) {
        const myUserId = req.user.id;
        const myEventId = req.params.id;

        const myevent = await myeventsDatamapper.findOne(myUserId, myEventId);

        if (!myevent) {
            throw new ApiError('event does not exists', { statusCode: 404 });
        }

        await myeventsDatamapper.delete(myUserId, myEventId);
        return res.json('delete ok');
    },

    // mettre à jour un de mes events
    async update(req, res) {
        const myUserId = req.user.id;
        const myEventId = req.params.id;

        const myEvent = await myeventsDatamapper.findOne(myUserId, myEventId);

        if (!myEvent) {
            throw new ApiError('Event does not exists', { statusCode: 404 });
        }
        const updateEvent = await myeventsDatamapper.update(myEventId, req.body, myUserId);

        return res.json(updateEvent);
    },
};
