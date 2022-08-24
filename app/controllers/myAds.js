const { myAdsDatamapper } = require('../models');
const { userDatamapper } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

module.exports = {

    // récupérer mes annonces
    async getAll(req, res) {
        const userId = parseInt(req.user.id, 10);

        const user = await userDatamapper.findOne(userId);

        if (!user) {
            throw new ApiError('user does not exists', { statusCode: 404 });
        }

        const myads = await myAdsDatamapper.findAllPersonnalAds(userId);
        console.log(myads)

        return res.json(myads);
    },
};
