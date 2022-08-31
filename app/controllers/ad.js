const { adDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const { transporter } = require('../helpers/nodemailer');
const client = require('../client/pg');

module.exports = {

    // list getAll & filters
    async getAll(req, res) {
        const {
            county, city, date, typeOfMusic,
        } = req.query;

        let sqlUsers = 'SELECT * FROM event_with_candidate ';
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
        // ADS - filter by city
        if (city) {
            const cityFilter = city.join("','");

            sqlUsers += `WHERE city = '${cityFilter}' AND is_published = 'false'`;
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

            sqlUsers += `WHERE type_of_music_needed = '${typeFilter}' AND is_published = 'false'`;
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
    // récupérer 1 annonce
    async getOne(req, res) {
        const eventId = req.params.id;
        const event = await adDatamapper.findOne(eventId);

        if (!event) {
            throw new ApiError('event not found', { statusCode: 404 });
        }
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
        if (applicationStatus1 || applicationStatus2) {
            throw new ApiError('You already applied to this ad', { statusCode: 406 });
        }

        const applyToAd = await adDatamapper.insertApplication(userId, adId);
        res.json(applyToAd);
    },

    async sendEmail(req, res) {
        const userId = req.user.id;

        // On vérifie qu'on a bien récupéré l'id de l'user
        const user = await adDatamapper.findUser(userId);
        if (!user) {
            throw new ApiError('User does not exists or can not be found', { statusCode: 404 });
        }

        // On récupère l'id de l'évent qui m'intéresse
        const eventId = req.params.id;
        const receiver = await adDatamapper.findOne(eventId);
        if (!receiver) {
            throw new ApiError('User does not exists or can not be found', { statusCode: 404 });
        }

        // on récupère l'id du momer ayant créé l'ad qui m'intéresse
        const findEventOwnerId = await adDatamapper.findOwnerEventId(eventId);
        if (!findEventOwnerId) {
            throw new ApiError('Event owner ID could not be found', { statusCode: 404 });
        }

        // on récupère l'email du owner
        const findEventOwnerEmail = await adDatamapper.findOwnerEventEmail(findEventOwnerId.owner_id);
        if (!findEventOwnerEmail) {
            throw new ApiError('Event owner email could not be found', { statusCode: 404 });
        }

        console.log('email du momer :', findEventOwnerEmail);

        // on récupère tous les parametres pour de l'user
        const UserName = req.user.name;
        const UserEmail = req.user.email;
        const UserRole = req.user.role;
        const UserId = req.user.id;

        console.log('req.user :', UserName, UserEmail, UserRole, UserId);

        // On récupère ce qui a été rentré dans le body
        const { textEmail } = req.body;

        const resultSendMail = await transporter.sendMail({
            from: `${UserEmail}`,
            to: findEventOwnerEmail.email,
            subject: `${UserName} veut vous envoyer des bisous`,
            text: `Bonjour, je suis un(e) ${UserRole} et voici mon plus beau poeme ! - ${textEmail}`,
        });
        if (!resultSendMail) {
            res.status(400);
            throw new Error('Error, mail could not be send');
        } else {
            return res.json('email envoyé');
        }
    },
};
