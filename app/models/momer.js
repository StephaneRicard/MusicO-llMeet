const client = require('../client/pg');

const CoreDatamapper = require('./coreDatamapper');

module.exports = class Momer extends CoreDatamapper {
    static tableName = 'momer_with_type';

    // création méthode pour mettre a jour un momer (on utilise la fonction sql update_momer)
    static async update(id, user) {
        const savedMomer = await client.query('SELECT * FROM update_momer($1,$2)', [id, user]);
        return savedMomer.rows[0];
    }

    static async delete(id) {
        const result = await client.query('DELETE FROM users WHERE id =$1', [id]);
        await client.query('DELETE FROM event WHERE owner_id = $1', [id]);
        return result.rowCount;
    }
};
