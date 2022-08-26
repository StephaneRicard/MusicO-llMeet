const { eventDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');

module.exports = {
    // list events getAll

    async getAll(req, res) {
        const {
            county, city, date, typeOfMusic,
        } = req.query;

        let sqlUsers = 'SELECT * FROM event ';

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

        // list events getAll
        if (!county && !city && !date && !typeOfMusic) {
            const events = await eventDatamapper.findAll();

            // permet d'éviter les doublons dans les groupes liés à l'annonce
            // (lorsque qu'ils ont plusieurs genre musicaux)
            events.forEach((event) => {
            // eslint-disable-next-line no-param-reassign
                event.group_name = [...new Set(event.group_name)];
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
        event.group_name = [...new Set(event.group_name)];

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
};
