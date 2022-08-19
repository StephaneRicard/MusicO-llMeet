const client = require('../client/pg');

const CoreDatamapper = require('./coreDatamapper');

module.exports = class Momer extends CoreDatamapper {
    static tablename = 'momer_with_type';

    // création méthode pour mettre a jour un momer (on utilise la fonction sql update_momer)
    static async update(id, user) {
        const savedMomer = await client.query('SELECT * FROM update_momer($1,$2)', [id, user]);
        return savedMomer.rows[0];
    }
};
