const { myeventsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer mes annonces
    async getAll(req, res) {
        const myId = req.user.id;

        const myEvents = await myeventsDatamapper.findAll(myId);

        if (!myEvents) {
            throw new ApiError('events can not be found :', myEvents, { statusCode: 404 });
        }

        return res.json(myEvents);
    },

    // récupérer 1 event parmis la liste de mes events
    async getOne(req, res) {
        const myUserId = req.user.id;
        if (!myUserId) {
            throw new ApiError('Error on User id -> "myUserId"', myUserId, { statusCode: 404 });
        }

        const myEventId = req.params.id;
        if (!myEventId) {
            throw new ApiError('Can not find anything for this id', myEventId, { statusCode: 404 });
        }

        const myEvent = await myeventsDatamapper.findOne(myUserId, myEventId);
        return res.json(myEvent);
    },

    // supprimer l'un de mes events
    async delete(req, res) {
        const myEventId = req.params.id;
        if (!myEventId) {
            throw new ApiError('Can not find anything for this id', myEventId, { statusCode: 404 });
        }

        const event = await myeventsDatamapper.findOne(myEventId);

        if (!event) {
            throw new ApiError('event does not exists', { statusCode: 404 });
        }

        await myeventsDatamapper.delete(myEventId);
        return res.status(204).json('delete ok');
    },
};
