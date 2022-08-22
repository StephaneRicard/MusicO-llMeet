// const CoreDatamapper = require('./controllers');

// module.exports = {

//     // récupérer la liste de tous les musicos
//     async filters(req, res) {
//         const { county } = req.query;
//         // await musicosDatamapper.findAll();
//         const sql = 'SELECT * FROM users';
//         if (!county) {
//             throw new Error('County filter not working');
//         } else {
//             const countyFilter = sql.join("',");
//             // eslint-disable-next-line no-const-assign
//             sql += ` WHERE county = ('${countyFilter}')`;
//         }
//         const data = await musicosDatamapper(CoreDatamapper, sql);
//         return res.json(data);
//     },

// };
