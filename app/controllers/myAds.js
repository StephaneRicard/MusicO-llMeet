const { myAdsDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer mes annonces
    async getAll(req, res) {
        const userId = parseInt(req.user.id, 10);

        if (!userId) {
            throw new ApiError('user does not exists', { statusCode: 404 });
        }

        const myads = await myAdsDatamapper.findAll(userId);

        return res.json(myads);
    },

    async getOne(req, res) {
        const userId = parseInt(req.user.id, 10);
        const adId = req.params.id;
        if (!userId) {
            throw new ApiError('user does not exists', { statusCode: 404 });
        }

        if (!adId) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }

        const myad = await myAdsDatamapper.findOne(userId, adId);

        return res.json(myad);
    },

    async delete(req, res) {
        const userId = parseInt(req.user.id, 10);
        const adId = req.params.id;

        if (!userId) {
            throw new ApiError('user does not exists', { statusCode: 404 });
        }

        if (!adId) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }

        await myAdsDatamapper.delete(userId, adId);
        return res.json('delete ok');
    },

    async update(req, res) {
        const adId = req.params.id;

        if (!adId) {
            throw new ApiError('Ad does not exists', { statusCode: 404 });
        }

        const savedAd = await myAdsDatamapper.update(adId, req.body);
        return res.json(savedAd);
    },
};
