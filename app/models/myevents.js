const client = require('../client/pg');

module.exports = class myevents {
    // retrouver tous les events
    static async findAll(myId) {
        const result = await client.query('SELECT * FROM event WHERE "is_published" = true AND "owner_id" = $1', [myId]);
        return result.rows;
    }

    // retrouver un event
    static async findOne(myUserId, myEventId) {
        const result = await client.query('SELECT * FROM event WHERE "is_published" = true AND "owner_id" = $1 AND "id" = $2', [myUserId, myEventId]);
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
