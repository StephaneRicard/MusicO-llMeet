const { myAdsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer mes annonces
    async getAll(req, res) {
        const userId = req.user.id;

        const myads = await myAdsDatamapper.findAll(userId);

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

    // consulter details d'une candidature lié à une annonce
    async getApplicationDetails(req, res) {
        const candidateId = req.params.userId;
        if (!candidateId) {
            throw new ApiError('This candidate does not not exists or Id does not belong to a musicos', { statusCode: 404 });
        }
        const detailsCandidate = await myAdsDatamapper.findOneApplication(candidateId);
        if (!detailsCandidate) {
            throw new ApiError('profile could not be found', { statusCode: 404 });
        }
        return res.json(detailsCandidate);
    },

    // accepter ou refuser un candidat
    async updateCandidateStatus(req, res) {
        const eventId = req.params.id;
        const findEventId = await myAdsDatamapper.findOne(eventId);
        if (!findEventId) {
            throw new ApiError('userId does not exist or can not be found', { statusCode: 404 });
        }

        const candidateId = req.params.userId;
        const findUsertId = await myAdsDatamapper.findOne(candidateId);
        if (!findUsertId) {
            throw new ApiError('userId does not exist or can not be found', { statusCode: 404 });
        }

        // eslint-disable-next-line prefer-destructuring
        const response = req.params.response;
        const findResponseForCandidate = await myAdsDatamapper.findOne(response);
        if (!findResponseForCandidate) {
            throw new ApiError('response for candidate does not exist or can not be found', { statusCode: 404 });
        }

        // eslint-disable-next-line max-len
        const updateCandidateStatus = await myAdsDatamapper.update(eventId, candidateId, response);
        return res.json(updateCandidateStatus);

    },
};