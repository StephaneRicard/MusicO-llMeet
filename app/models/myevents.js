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

    // supprimer un event
    static async delete(myUserId, myEventId) {
        const result = await client.query('DELETE FROM "event" WHERE "is_published" = true AND "owner_id" = $1 AND "id" = $2', [myUserId, myEventId]);
        return result.rowCount;
    }

    // creer un event
    static async update(myEventId, reqBody, ownerId) {
        const updateMyEvent = await client.query('SELECT * FROM update_event($1,$2) WHERE "is_published" = true AND "owner_id" = $3 AND "id" = $1', [myEventId, reqBody, ownerId]);
        return updateMyEvent.rows[0];
    }
};
