const { eventDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');
const { cloudinary } = require('../helpers/cloudinary');

module.exports = {
    // list events getAll

    async getAll(req, res) {
        const {
            county, eventType, eventDate, typeOfMusic,
        } = req.query;

        let sqlUsers = 'SELECT * FROM event_with_candidate ';

        // EVENTS - filter by county
        if (county) {
            const countyFilter = county.join("','");

            sqlUsers += ` WHERE county = '${countyFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        // EVENTS - filter by eventType
        if (eventType) {
            const eventTypeFilter = eventType.join("','");

            sqlUsers += `WHERE event_type = '${eventTypeFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        // EVENTS - filter by date
        if (eventDate) {
            const dateFilter = eventDate.join("','");

            sqlUsers += `WHERE event_date = '${dateFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        // EVENTS - filter by musical type
        if (typeOfMusic) {
            const typeFilter = typeOfMusic.join("','");

            sqlUsers += `WHERE type_of_music_needed = '${typeFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        // list events getAll
        if (!county && !eventType && !eventDate && !typeOfMusic) {
            const events = await eventDatamapper.findAll();

            // permet d'éviter les doublons dans les groupes liés à l'annonce
            // (lorsque qu'ils ont plusieurs genre musicaux)
            events.forEach((event) => {
                const ids = event.groups.map((group) => group.id);
                const filtered = event.groups.filter(({ id }, index) => !ids.includes(id, index + 1));
                // eslint-disable-next-line no-param-reassign
                event.groups = filtered;
            });

            return res.json(events);
        }
        return null;
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
        const ids = event.groups.map((group) => group.id);
        const filtered = event.groups.filter(({ id }, index) => !ids.includes(id, index + 1));
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

    // filters
    async filters(req, res) {
        const {
            county, city, date, typeOfMusic,
        } = req.query;
        // eslint-disable-next-line quotes
        let sqlUsers = `SELECT
        *
        FROM event `;
        // EVENTS - filter by county
        if (county) {
            const countyFilter = county.join("','");
            sqlUsers += ` WHERE county = '${countyFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }
            const result = await client.query(sqlUsers);
            return res.json(result);
        }
        // EVENTS - filter by city
        if (city) {
            const cityFilter = city.join("','");
            sqlUsers += `WHERE city = '${cityFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result);
        }

        // EVENTS - filter by date
        if (date) {
            const dateFilter = date.join("','");
            sqlUsers += `WHERE event_date = '${dateFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result);
        }

        // EVENTS - filter by musical type
        if (typeOfMusic) {
            const typeFilter = typeOfMusic.join("','");
            sqlUsers += `WHERE type_of_music_needed = '${typeFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result);
        }
        return null;
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
