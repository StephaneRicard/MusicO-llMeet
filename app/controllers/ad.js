const { adDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const client = require('../client/pg');

module.exports = {

    // list getAll & filters
    async getAll(req, res) {
        const {
            city, county, date, typeOfMusic,
        } = req.query;

        let sqlUsers = 'SELECT * FROM event_with_candidate ';
        // ADS - filter by county
        if (city) {
            const cityFilter = city.join("','");

            sqlUsers += ` WHERE city = '${cityFilter}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }
        // ADS - filter by county
        if (county) {
            const countyFilter = county.join("','");

            sqlUsers += ` WHERE county = '${countyFilter}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        // ADS - filter by date
        if (date) {
            const dateFilter = date.join("','");

            sqlUsers += `WHERE event_date = '${dateFilter}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        // ADS - filter by musical type
        if (typeOfMusic) {
            const typeFilter = typeOfMusic.join("','");

            sqlUsers += `WHERE type_of_music_needed = '${typeFilter.toLowerCase()}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        if (!city && !county && !date && !typeOfMusic) {
            const events = await adDatamapper.findAll();

            // permet d'éviter les doublons dans les groupes liés à l'annonce
            // (lorsque qu'ils ont plusieurs genre musicaux)
            events.forEach((event) => {
                const ids = event.groups.map((group) => group.userId);
                const filtered = event.groups.filter(({ userId }, index) => !ids.includes(userId, index + 1));
                // eslint-disable-next-line no-param-reassign
                event.groups = filtered;
            });

            return res.json(events);
        }
        return null;
    },
    // récupérer 1 annonce
    async getOne(req, res) {
        const eventId = req.params.id;
        const event = await adDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('event not found', { statusCode: 404 });
        }

        const ids = event.groups.map((group) => group.userId);
        const filtered = event.groups.filter(({ userId }, index) => !ids.includes(userId, index + 1));
        // eslint-disable-next-line no-param-reassign
        event.groups = filtered;

        return res.json(event);
    },

    // créer un event (appelé annonce)
    async createEvent(req, res) {
        const savedAd = await adDatamapper.insertEvent(req.body);
        res.json(savedAd);
    },

    // postuler a une annonce
    async createApplication(req, res) {
        // On vérifie si le user existe
        const userId = req.user.id;

        // On vérifie si l'ad existe
        const adId = req.params.id;
        const ad = await adDatamapper.findOne(adId);
        if (!ad) {
            throw new ApiError('Ad does not exists or can not be found', { statusCode: 404 });
        }

        // on verifie que le musicos n'a pas deja postulé a cette ad et qu'il est en attente
        const applicationStatus1 = await adDatamapper.findIfCandidateAlreadyAppliedToThisAd1(adId, userId);
        // on verifie que le musicos n'a pas deja postulé a cette ad et qu'il a été refusé
        const applicationStatus2 = await adDatamapper.findIfCandidateAlreadyAppliedToThisAd2(adId, userId);
        // on verifie que le musicos n'a pas deja postulé a cette ad et qu'il est en attente
        const applicationStatus3 = await adDatamapper.findIfCandidateAlreadyAppliedToThisAd3(adId, userId);
        if (applicationStatus1) {
            throw new ApiError('You already applied to this ad', { statusCode: 406 });
        } else if (applicationStatus2) {
            throw new ApiError('You were refused to this ad before', { statusCode: 406 });
        } else if (applicationStatus3) {
            throw new ApiError('You were already accepted to this ad', { statusCode: 406 });
        }

        const applyToAd = await adDatamapper.insertApplication(userId, adId);
        res.json(applyToAd);
    },

};
