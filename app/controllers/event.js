const { eventDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');

module.exports = {
    // récupérer la liste de tous les events
    async getAll(_req, res) {
        const events = await eventDatamapper.findAll();

        // permet d'éviter les doublons dans les groupes liés à l'annonce
        // (lorsque qu'ils ont plusieurs genre musicaux)
        events.forEach((event) => {
            // eslint-disable-next-line no-param-reassign
            event.group_name = [...new Set(event.group_name)];
        });

        return res.json(events);
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

    // mettre à jour un event(table event uniquement)
    // TODO: voir comment modifier les candidatures
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
    // eslint-disable-next-line consistent-return
    async filters(req, res) {
        const { county, city } = req.query;
        // eslint-disable-next-line quotes
        let sqlUsers = `SELECT
        *
        FROM event `;
        // MOMERS - filter by county
        if (county) {
            const countyFilter = county.join("','");
            // eslint-disable-next-line no-const-assign
            sqlUsers += ` WHERE county = '${countyFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }
            console.log('sql request', sqlUsers);
            const result = await client.query(sqlUsers);
            return res.json(result);
        }
        // MOMERS - filter by city
        if (city) {
            const cityFilter = city.join("','");
            // eslint-disable-next-line no-const-assign
            sqlUsers += `WHERE city = '${cityFilter}' AND is_published = 'true'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }
            console.log('sql request', sqlUsers);
            const result = await client.query(sqlUsers);
            return res.json(result);
        }
    },
};
