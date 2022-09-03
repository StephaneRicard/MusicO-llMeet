const { myeventsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer mes annonces
    async getAll(req, res) {
        const myId = req.user.id;

        const myEvents = await myeventsDatamapper.findAll(myId);

        // permet d'éviter les doublons dans les groupes liés à l'annonce
        // (lorsque qu'ils ont plusieurs genre musicaux)
        myEvents.forEach((event) => {
            const ids = event.groups.map((group) => group.userId);
            const filtered = event.groups.filter(({ userId }, index) => !ids.includes(userId, index + 1));
            // eslint-disable-next-line no-param-reassign
            event.groups = filtered;
        });

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

        const ids = myEvent.groups.map((group) => group.userId);
        const filtered = myEvent.groups.filter(({ userId }, index) => !ids.includes(userId, index + 1));
        // eslint-disable-next-line no-param-reassign
        myEvent.groups = filtered;

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
