const { myAdsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');
const { transporter } = require('../helpers/nodemailer');

module.exports = {

    // récupérer mes annonces
    async getAll(req, res) {
        const usersId = req.user.id;

        const myads = await myAdsDatamapper.findAll(usersId);

        // permet d'éviter les doublons dans les groupes liés à l'annonce
        // (lorsque qu'ils ont plusieurs genre musicaux)
        myads.forEach((ad) => {
            const ids = ad.groups.map((group) => group.userId);
            const filtered = ad.groups.filter(({ userId }, index) => !ids.includes(userId, index + 1));
            // eslint-disable-next-line no-param-reassign
            ad.groups = filtered;
        });
        return res.json(myads);
    },

    // récupérer une de mes annonce
    async getOne(req, res) {
        const usersId = req.user.id;
        const adId = req.params.id;

        const myad = await myAdsDatamapper.findOne(usersId, adId);

        if (!myad) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }
        // permet d'éviter les doublons dans les groupes liés à l'annonce
        // (lorsque qu'ils ont plusieurs genre musicaux)
        const ids = myad.groups.map((group) => group.userId);
        const filtered = myad.groups.filter(({ userId }, index) => !ids.includes(userId, index + 1));
        // eslint-disable-next-line no-param-reassign
        myad.groups = filtered;
        return res.json(myad);
    },

    // supprimer une des mes annonces
    async delete(req, res) {
        const userId = req.user.id;
        const adId = req.params.id;

        const ad = await myAdsDatamapper.findOne(userId, adId);

        if (!ad) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }

        await myAdsDatamapper.delete(userId, adId);
        return res.json('delete ok');
    },

    // mettre a jour une de mes annnonces
    async update(req, res) {
        const userId = req.user.id;
        const adId = req.params.id;
        const ad = await myAdsDatamapper.findOne(userId, adId);
        if (!ad) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }

        const savedAd = await myAdsDatamapper.update(adId, req.body);
        return res.json(savedAd);
    },

    // visualiser le detail d'un annonce lié à une de mes annonces
    async getApplicationDetails(req, res) {
        const userId = req.user.id;
        const adId = req.params.id;
        const { applicationId } = req.params;
        const ad = await myAdsDatamapper.findOne(userId, adId);
        if (!ad) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }

        const application = await myAdsDatamapper.findApplicationDetail(applicationId);

        if (!application) {
            throw new ApiError('Application does not exists', { statusCode: 404 });
        }
        return res.json(application);
    },

    // mettre à jour un statut lié à une candidature d'une de mes annonces
    async updateCandidateStatus(req, res) {
        const { applicationId } = req.params;

        const application = await myAdsDatamapper.findApplicationDetail(applicationId);

        if (!application) {
            throw new ApiError('Application does not exists', { statusCode: 404 });
        }

        const updateApplication = await myAdsDatamapper.updateApplicationStatus(applicationId, req.body);
        return res.json(updateApplication);
    },

    async sendEmail(req, res) {
        const userId = req.user.id;

        // On vérifie qu'on a bien récupéré l'id de l'user
        const user = await myAdsDatamapper.findUser(userId);
        if (!user) {
            throw new ApiError('User does not exists or can not be found', { statusCode: 404 });
        }

        // on récupere les info liées à l'ad postée qui m'intéresse
        const adId = req.params.id;
        const { applicationId } = req.params;
        const ad = await myAdsDatamapper.findOne(userId, adId);
        if (!ad) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }

        // on récupère les info de la candidature qui m'intéresse
        const application = await myAdsDatamapper.findApplicationDetail(applicationId);

        if (!application) {
            throw new ApiError('Application does not exists', { statusCode: 404 });
        }
        console.log('application :', application);

        // on récupère tous les parametres pour de l'user
        const UserName = req.user.name;
        const UserEmail = req.user.email;
        const UserRole = req.user.role;
        const UserId = req.user.id;

        console.log('req.user :', UserName, UserEmail, UserRole, UserId);
        console.log('ad.name :', ad.name);
        // On récupère ce qui a été rentré dans le body
        const { textEmail } = req.body;

        const resultSendMail = await transporter.sendMail({
            from: `${UserEmail}`,
            to: application.email,
            subject: `${UserName} veut vous annoncer une bonne nouvelle`,
            text: `Félicitation, vous avez été retenu pour jouer au ${ad.name} - ${textEmail}`,
        });
        if (!resultSendMail) {
            res.status(400);
            throw new Error('Error, mail could not be send');
        } else {
            return res.json('email envoyé');
        }
    },
};
