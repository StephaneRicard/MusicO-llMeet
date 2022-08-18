const client = require('../client/pg');

const CoreDatamapper = require('./coreDatamapper');

module.exports = class Momer extends CoreDatamapper {
    static tablename = 'momer_with_type';

    static async update(id, user) {
        const savedUser = await client.query('SELECT * FROM update_users($1,$2)', [id, user]);
        return savedUser.rows[0];
    }
};
