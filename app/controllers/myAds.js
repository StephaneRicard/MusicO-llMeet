const { myAdsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer mes annonces
    async getAll(req, res) {
        const userId = req.user.id;

        const myads = await myAdsDatamapper.findAll(userId);

        // permet d'éviter les doublons dans les groupes liés à l'annonce
        // (lorsque qu'ils ont plusieurs genre musicaux)
        myads.forEach((ad) => {
            const ids = ad.groups.map((group) => group.id);
            const filtered = ad.groups.filter(({ id }, index) => !ids.includes(id, index + 1));
            // eslint-disable-next-line no-param-reassign
            ad.groups = filtered;
        });
        return res.json(myads);
    },

    // récupérer une de mes annonce
    async getOne(req, res) {
        const userId = req.user.id;
        const adId = req.params.id;

        const myad = await myAdsDatamapper.findOne(userId, adId);

        if (!myad) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }
        // permet d'éviter les doublons dans les groupes liés à l'annonce
        // (lorsque qu'ils ont plusieurs genre musicaux)
        const ids = myad.groups.map((group) => group.id);
        const filtered = myad.groups.filter(({ id }, index) => !ids.includes(id, index + 1));
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
};
