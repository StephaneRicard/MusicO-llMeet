const {
    musicosDatamapper
} = require('../models');
const {
    transporter
} = require('../helpers/nodemailer');
const {
    ApiError
} = require('../helpers/errorHandler');
const client = require('../client/pg');

module.exports = {

    // récupérer la liste de tous les musicos
    async getAll(req, res) {
        const {
            county,
            city,
            momerType,
            musical_type
        } = req.query;
        let sqlUsers = `SELECT
        *
        FROM users `;
        // MUSICOS - filter by county
        if (county) {
            const countyFilter = county.join("','");
            sqlUsers += ` WHERE county = '${countyFilter}' AND role = 'musicos'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }
        // MUSICOS - filter by city
        if (city) {
            const cityFilter = city.join("','");
            sqlUsers += `WHERE city = '${cityFilter}' AND role = 'musicos'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
        }
        // MUSICOS - filter by musical type
        if (musical_type) {
            const musical_typeFilter = musical_type.join("','");
            let sqlUsers = `SELECT * FROM musical_type_per_users
            FULL JOIN users ON "users"."id" = users_id`;
            sqlUsers += ` WHERE musical_type_id = '${musical_typeFilter}' AND role = 'musicos'`;
            if (!sqlUsers) {
                throw new Error('Issue with variable sqlUsers', sqlUsers);
            }

            const result = await client.query(sqlUsers);
            return res.json(result.rows);
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
            return res.json(result.rows);
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
            throw new ApiError('musicos not found', {
                statusCode: 404
            });
        }
        return res.json(musicos);
    },

    async sendEmail(req, res) {
        const userId = req.user.id;

        // On vérifie qu'on a bien récupéré l'id de l'user
        const user = await musicosDatamapper.findUser(userId);
        if (!user) {
            throw new ApiError('User does not exists or can not be found', {
                statusCode: 404
            });
        }

        // On récupère les info du musicos qui m'intéresse à partir de son id
        const musicosId = req.params.id;
        const musicos = await musicosDatamapper.findUser(musicosId);
        if (!musicos) {
            throw new ApiError('Musicos does not exists or can not be found', {
                statusCode: 404
            });
        }

        console.log('email du momer :', musicos.email);

        // on récupère tous les parametres pour de l'user
        const UserName = req.user.name;
        const UserEmail = req.user.email;
        const UserRole = req.user.role;
        const UserId = req.user.id;

        console.log('req.user :', UserName, UserEmail, UserRole, UserId);

        // On récupère ce qui a été rentré dans le body
        const {
            textEmail
        } = req.body;

        const resultSendMail = await transporter.sendMail({
            from: `${UserEmail}`,
            to: musicos.email,
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