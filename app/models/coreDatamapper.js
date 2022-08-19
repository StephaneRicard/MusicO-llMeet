// ensemble de méthodes communes à tous les models

const client = require('../client/pg');

module.exports = class CoreDatamapper {
    static async findAll() {
        const result = await client.query(`SELECT * FROM ${this.tablename}`);
        return result.rows;
    }

    static async findOne(id) {
        const result = await client.query(`SELECT * FROM ${this.tablename} WHERE id = $1`, [id]);
        return result.rows[0];
    }

    static async delete(id) {
        const result = await client.query(`DELETE FROM ${this.tablename} WHERE id = $1`, [id]);
        return result.rowCount;
    }
};
