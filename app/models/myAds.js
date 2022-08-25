const client = require('../client/pg');

module.exports = class MyAds {
    static async findAll(id) {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE owner_id = $1 AND is_published = false', [id]);
        return result.rows;
    }

    static async findOne(ownerId, adId) {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE "owner_id" = $1 AND "id" = $2 AND is_published = false', [ownerId, adId]);
        return result.rows[0];
    }

    static async delete(ownerId, adId) {
        const result = await client.query('DELETE FROM event WHERE "owner_id" = $1 AND "id" = $2 AND is_published = false', [ownerId, adId]);
        return result.rowCount;
    }

    static async update(id, ad) {
        const result = await client.query('SELECT * FROM update_event($1, $2) WHERE id=$1 AND is_published = false', [id, ad]);
        return result.rows[0];
    }
};
