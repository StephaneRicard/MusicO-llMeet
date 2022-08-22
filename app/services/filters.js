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
    async filters(req, res) {
        const { county } = req.query;
        // await musicosDatamapper.findAll();
        const sql = 'SELECT * FROM users';
        if (!county) {
            throw new Error('County filter not working');
        } else {
            const countyFilter = sql.join("',");
            // eslint-disable-next-line no-const-assign
            sql += ` WHERE county = ('${countyFilter}')`;
        }
        const data = await musicosDatamapper(CoreDatamapper, sql);
        return res.json(data);
    },

};
