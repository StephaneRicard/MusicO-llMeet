const { momerDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');

// const CoreDatamapper = require('./index');

module.exports = {

    // récupérer la liste de tous les momers
    async getAll(_req, res) {
        const momers = await momerDatamapper.findAll();
        return res.json(momers);
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
    // supprimer 1 momer (de la table users et supprimer ses event)
    async delete(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('momer does not exists', { statusCode: 404 });
        }

        await momerDatamapper.delete(momerId);
        return res.status(204).json('delete ok');
    },
    // mettre à jour 1 momer
    async update(req, res) {
        const momerId = req.params.id;
        const momer = await momerDatamapper.findOne(momerId);

        if (!momer) {
            throw new ApiError('Momer does not exists', { statusCode: 404 });
        }
        const savedMomer = await momerDatamapper.update(momerId, req.body);
        return res.json(savedMomer);
    },
    // filters
    // eslint-disable-next-line consistent-return
    async filters(req, res) {
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
        // // MOMERS - filter by momer type (restaurant, pub, etc.)
        // if (momerType) {
        //     let sqlMomerType = `SELECT
        //         *
        //     FROM momer_with_type `;
        //     const momerTypeFilter = momerType.join("','");
        //     // eslint-disable-next-line no-const-assign
        //     sqlMomerType += `WHERE momer_type = '${momerTypeFilter}'`;
        //     if (!sqlMomerType) {
        //         throw new Error('Issue with variable sqlUsers', sqlMomerType);
        //     }
        //     console.log('sql request', sqlMomerType);
        //     const result = await client.query(sqlMomerType);
        //     return res.json(result);
        // }
    },
};
