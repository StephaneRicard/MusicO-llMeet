// ensemble de méthodes communes à tous les models

const client = require('../client/pg');

module.exports = class CoreDatamapper {
    static async findAll() {
        const result = await client.query(`SELECT * FROM ${this.tableName}`);
        return result.rows;
    }

    static async findOne(id) {
        const result = await client.query(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
        return result.rows[0];
    }
};
