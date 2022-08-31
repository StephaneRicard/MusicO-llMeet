const CoreDatamapper = require('./coreDatamapper');
const client = require('../client/pg');

module.exports = class Musicos extends CoreDatamapper {
    static tableName = 'musicos_with_musical_type';

    // retrouver un user en fonction de son id
    static async findUser(id) {
        const result = await client.query('SELECT * FROM "users" WHERE id=$1', [id]);
        return result.rows[0];
    }
};
