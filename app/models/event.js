const client = require('../client/pg');

module.exports = class Event {
    // retrouver tous les events
    static async findAll() {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE "is_published" = true');
        return result.rows;
    }

    // retrouver un event
    static async findOne(id) {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE WHERE "is_published" = true AND id = $1', [id]);
        return result.rows[0];
    }

    // TODO: revoir l'update des events pour les candidatures
    static async update(id, event) {
        const savedEvent = await client.query('SELECT * FROM update_event($1,$2)', [id, event]);
        return savedEvent.rows[0];
    }

    static async delete(id) {
        const result = await client.query('DELETE FROM "event" WHERE id = $1', [id]);
        return result.rowCount;
    }
};
