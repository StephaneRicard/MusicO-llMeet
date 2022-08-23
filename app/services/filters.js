// const debug = require('debug')('app: test');
// const {
//     momerDatamapper
// } = require('../models');
// const reqCounty = req.query.county;

// module.exports = {
//     let filter = {}
//         if (reqCounty) {
//             filter = {
//                 county: reqCounty.split(',')
//             }
//         }
//     // filter sur MoMers
//     const filterByCount = await momerDatamapper.find(filter).populate('category')
//     if (!filterByCount) {
//         resizeBy.status(500).json({
//             success: false
//         })
//     }
// };
const { musicosDatamapper } = require('../models');
// const { ApiError } = require('../helpers/errorHandler');
// const client = require('../client/pg');
const CoreDatamapper = require('../controllers');

module.exports = {

    // récupérer la liste de tous les musicos
    async filtersCounty(req, res) {
        const { county, city } = req.query;
        // await musicosDatamapper.findAll();
        const sqlUsers = 'SELECT * FROM users';
        if (county) {
            const countyFilter = sqlUsers.join("','");
            // eslint-disable-next-line no-const-assign
            sqlUsers += `WHERE county = ('${countyFilter}') AND role = musicos`;
        }
        if (city) {
            const cityFilter = sqlUsers.join("','");
            // eslint-disable-next-line no-const-assign
            sqlUsers += `WHERE city = ('${cityFilter}') AND role = musicos`;
        }
        const data = await musicosDatamapper(CoreDatamapper, sqlUsers);
        return res.json(data);
    },

};
