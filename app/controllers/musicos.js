const { musicosDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');

module.exports = {

    // récupérer la liste de tous les musicos
    async getAll(req, res) {
        const { county, city, momerType } = req.query;
        let sqlUsers = `SELECT
        name,
        city,
        email,
        password,
        phone,
        county,
        role
        FROM users `;
        // MOMERS - filter by county
        if (county) {
            const countyFilter = county.join("','");
            sqlUsers += ` WHERE county = '${countyFilter}' AND role = 'momer'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result);
        }
        // MOMERS - filter by city
        if (city) {
            const cityFilter = city.join("','");
            sqlUsers += `WHERE city = '${cityFilter}' AND role = 'momer'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result);
        }
        // MOMERS - filter by momer type (restaurant, pub, etc.)
        if (momerType) {
            let sqlMomerType = `SELECT
                *
            FROM momer_with_type `;
            const momerTypeFilter = momerType.join("','");
            sqlMomerType += `WHERE momer_type = '${momerTypeFilter}'`;
            if (!sqlMomerType) {
                throw new Error('Issue with variable sqlUsers', sqlMomerType);
            }

            const result = await client.query(sqlMomerType);
            return res.json(result);
        }

        // getAll
        if (!city && !county) {
            const musicos = await musicosDatamapper.findAll();
            return res.json(musicos);
        }
        return null;
    },
    // récupérer 1 musicos
    async getOne(req, res) {
        const musicosId = req.params.id;
        const musicos = await musicosDatamapper.findOne(musicosId);

        if (!musicos) {
            throw new ApiError('musicos not found', { statusCode: 404 });
        }
        return res.json(musicos);
    },
};
