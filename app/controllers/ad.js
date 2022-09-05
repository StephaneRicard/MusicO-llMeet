const { adDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const client = require('../client/pg');

module.exports = {

    /**
     * display all the events not published - with filters
     * @param {string} req - user data input in url (added filter)
     * @param {json} res - returns a json
     * @returns all the columns matching the sql request
     */
    async getAll(req, res) {
        const {
            county, city, date, typeOfMusic,
        } = req.query;

        let sqlUsers = 'SELECT * FROM event_with_candidate ';

        /**
         * ADS - filter by county by url query
         * @typedef {string} county
         */
        if (county) {
            /**
             * name of the county in url you wish to filter by
             * @constant
             * @type {string}
             */
            const countyFilter = county.join("','");

            sqlUsers += ` WHERE county = '${countyFilter}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }
        /**
         * ADS - filter by city by url query
         * @typedef {string} city
         */
        if (city) {
            const cityFilter = city.join("','");

            sqlUsers += `WHERE city = '${cityFilter}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }
        /**
         * ADS - filter by date by url query
         * @typedef {date} date
         */
        if (date) {
            const dateFilter = date.join("','");

            sqlUsers += `WHERE event_date = '${dateFilter}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }
        /**
         * ADS - filter by musical type by url query
         * @typedef {string} typeOfMusic
         */
        if (typeOfMusic) {
            const typeFilter = typeOfMusic.join("','");

            sqlUsers += `WHERE type_of_music_needed = '${typeFilter.toLowerCase()}' AND is_published = 'false'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }

        if (!county && !city && !date && !typeOfMusic) {
            const events = await adDatamapper.findAll();
            return res.json(events);
        }
        return null;
    },

    /**
     * getting one specific ad by its id
     * @param {number} req - data parameters in url (id)
     * @param {json} res - returns a json
     * @returns all the columns matching the sql request
     */
    async getOne(req, res) {
        /**
         * id of the event in url parameters
         * @constant
         * @type {number}
         */
        const eventId = req.params.id;
        const event = await adDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('event not found', { statusCode: 404 });
        }
        return res.json(event);
    },

    /**
     * create an event not puslished (ad)
     * @param {object} req - user data input in body
     * @param {json} res returns a json
     */
    async createEvent(req, res) {
        const savedAd = await adDatamapper.insertEvent(req.body);
        res.json(savedAd);
    },

    /**
     * apply function for an ad
     * @param {number} req - user data (id) or parameters in url (id)
     * @param {json} res - returns a json
     */
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
