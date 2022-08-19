const client = require('../client/pg');

module.exports = class Event {
    // retrouver tous les events
    static async findAll() {
        const result = await client.query('SELECT * FROM event WHERE is_published = true');
        return result.rows;
    }

    // retrouver un event
    static async findOne(id) {
        const result = await client.query('SELECT * FROM event WHERE is_published = true AND id = $1', [id]);
        return result.rows[0];
    }
};
