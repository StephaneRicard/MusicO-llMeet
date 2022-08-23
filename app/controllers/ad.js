const { adDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');

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
            sqlUsers += ` WHERE county = '${countyFilter}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }
            console.log('sql request', sqlUsers);
            const result = await client.query(sqlUsers);
            return res.json(result);
        }
        // ADS - filter by city
        if (city) {
            const cityFilter = city.join("','");
            // eslint-disable-next-line no-const-assign
            sqlUsers += `WHERE city = '${cityFilter}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }
            console.log('sql request', sqlUsers);
            const result = await client.query(sqlUsers);
            return res.json(result);
        }
    },

};
