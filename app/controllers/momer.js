const { momerDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');

// const CoreDatamapper = require('./index');

module.exports = {

    // list momers getAll
    async getAll(req, res) {
        const { county, city } = req.query;
        let sqlUsers = `SELECT
        *
        FROM users`;
        // MUSICOS - filter by county
        if (county) {
            const countyFilter = county.join("','");

            sqlUsers += ` WHERE county = '${countyFilter}' AND role = 'momer'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }
        // MUSICOS - filter by city
        if (city) {
            const cityFilter = city.join("','");

            sqlUsers += `WHERE city = '${cityFilter}' AND role = 'momer'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        // getAll
        if (!county && !city) {
            const momers = await momerDatamapper.findAll();
            return res.json(momers);
        }
        return null;
    },
    // récupérer 1 momer
    async getOne(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('momer not found', { statusCode: 404 });
        }
        return res.json(momer);
    },
};
