const { eventDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const { cloudinary } = require('../helpers/cloudinary');

module.exports = {
    // list events getAll

    async getAll(req, res) {
        const {
            county, eventType, eventDate, typeOfMusic,
        } = req.query;

        const events = await eventDatamapper.findAll();
        const filters = [];

        if (typeOfMusic) {
            filters.push({ fields: 'musical_type', values: typeOfMusic });
        }
        if (county) {
            filters.push({ fields: 'county', values: county });
        }
        if (eventType) {
            filters.push({ fields: 'event_type', values: eventType });
        }
        if (eventDate) {
            filters.push({ fields: 'event_date', values: eventDate });
        }

        const eventsFiltered = events.filter((event) => filters.every(({ fields, values }) => {
            const fieldName = event[fields];
            // eslint-disable-next-line no-restricted-syntax
            for (const value of values) {
                if (fieldName === value) { return true; }
                if (typeof fieldName !== 'string') {
                    // eslint-disable-next-line no-restricted-syntax
                    for (const field of fieldName) {
                        if (field === value) { return true; }
                    }
                }
            }
            return false;
        }));

        return res.json(eventsFiltered);
    },

    // récupérer 1 event
    async getOne(req, res) {
        const eventId = req.params.id;
        const event = await eventDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('event not found', { statusCode: 404 });
        }

        // permet d'éviter les doublons dans les groupes liés à l'annonce
        // (lorsque qu'ils ont plusieurs genre musicaux)
        const ids = event.groups.map((group) => group.userId);
        const filtered = event.groups.filter(({ userId }, index) => !ids.includes(userId, index + 1));
        // eslint-disable-next-line no-param-reassign
        event.groups = filtered;

        return res.json(event);
    },
    // supprimer 1 event
    async delete(req, res) {
        const eventId = req.params.id;
        const event = await eventDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('event does not exists', { statusCode: 404 });
        }

        await eventDatamapper.delete(eventId);
        return res.status(204).json('delete ok');
    },

    // mettre à jour un event
    async update(req, res) {
        const eventId = req.params.id;
        const event = await eventDatamapper.findOne(eventId);
        if (!event) {
            throw new ApiError('Event does not exists', { statusCode: 404 });
        }
        const savedevent = await eventDatamapper.update(eventId, req.body);
        return res.json(savedevent);
    },

    async uploadImage(req, res) {
        const fileStr = req.body.data;
        const eventId = req.params.id;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'event_image',
        });
        const savedUrl = await eventDatamapper.updateImage(eventId, uploadResponse.secure_url);

        res.json(savedUrl);
    },
};
