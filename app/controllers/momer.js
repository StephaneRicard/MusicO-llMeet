const { momerDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');

// const CoreDatamapper = require('./index');

module.exports = {

    // list momers getAll
    // eslint-disable-next-line consistent-return
    async getAll(req, res) {
        const { county, city } = req.query;
        // eslint-disable-next-line quotes
        let sqlUsers = `SELECT
        name,
        city,
        email,
        password,
        phone,
        county,
        role
        FROM users `;
        // MUSICOS - filter by county
        if (county) {
            const countyFilter = county.join("','");
            // eslint-disable-next-line no-const-assign
            sqlUsers += ` WHERE county = '${countyFilter}' AND role = 'musicos'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }
            console.log('sql request', sqlUsers);
            const result = await client.query(sqlUsers);
            return res.json(result);
        }
        // MUSICOS - filter by city
        if (city) {
            const cityFilter = city.join("','");
            // eslint-disable-next-line no-const-assign
            sqlUsers += `WHERE city = '${cityFilter}' AND role = 'musicos'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }
            console.log('sql request', sqlUsers);
            const result = await client.query(sqlUsers);
            return res.json(result);
        }

        // getAll
        if (!county && !city) {
            const momers = await momerDatamapper.findAll();
            return res.json(momers);
        }
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
