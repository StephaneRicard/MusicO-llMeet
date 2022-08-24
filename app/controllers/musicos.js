const { musicosDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const client = require('../client/pg');

module.exports = {

    // récupérer la liste de tous les musicos
    // eslint-disable-next-line consistent-return
    async getAll(req, res) {
        const { county, city, momerType } = req.query;
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
        // MOMERS - filter by county
        if (county) {
            const countyFilter = county.join("','");
            // eslint-disable-next-line no-const-assign
            sqlUsers += ` WHERE county = '${countyFilter}' AND role = 'momer'`;
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
            sqlUsers += `WHERE city = '${cityFilter}' AND role = 'momer'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }
            console.log('sql request', sqlUsers);
            const result = await client.query(sqlUsers);
            return res.json(result);
        }
        // MOMERS - filter by momer type (restaurant, pub, etc.)
        if (momerType) {
            let sqlMomerType = `SELECT
                *
            FROM momer_with_type `;
            const momerTypeFilter = momerType.join("','");
            // eslint-disable-next-line no-const-assign
            sqlMomerType += `WHERE momer_type = '${momerTypeFilter}'`;
            if (!sqlMomerType) {
                throw new Error('Issue with variable sqlUsers', sqlMomerType);
            }
            console.log('sql request', sqlMomerType);
            const result = await client.query(sqlMomerType);
            return res.json(result);
        }

        // getAll
        if (!city && !county) {
            const musicos = await musicosDatamapper.findAll();
            return res.json(musicos);
        }
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

    // TODO: update des musical types a revoir
    // mettre à jour 1 musicos
    async update(req, res) {
        const musicosId = req.user.id;
        const musicos = await musicosDatamapper.findOne(musicosId);

        if (!musicos) {
            throw new ApiError('musicos does not exists', { statusCode: 404 });
        }
        // on met à jour la table users avec les infos de req.body
        const savedMusicos = await musicosDatamapper.updateUsers(musicosId, req.body);

        // si les musical type sont modifiés on supprime les acniens musical types
        // type qui était présent dans la table de liaison
        if (req.body.musical_type) {
            await musicosDatamapper.deleteMusicalType(musicosId);

            // on rajoute les nouveaux dans la table de liaison
            req.body.musical_type.forEach(
                async (musicalType) => {
                    await musicosDatamapper.updateMusicalType(musicalType, musicosId);
                },
            );
        }
        // on renvoie la table users mise a jour
        return res.json({ savedMusicos });
    },
};
