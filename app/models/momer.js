const client = require('../client/pg');

module.exports = {

    async findAll() {
        const result = await client.query('SELECT * FROM "momer_with_type"');
        return result.rows;
    },

    async findOne(momerId) {
        const result = await client.query('SELECT * FROM "momer_with_type" WHERE id = $1', [momerId]);
        return result.rows[0];
    },

    async delete(momerId) {
        const result = await client.query('DELETE FROM momer WHERE id = $1', [momerId]);
        return result.rowCount;
    },
};
