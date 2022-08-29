const client = require('../client/pg');

module.exports = class Ad {
    // retrouver toutes les annonces
    static async findAll() {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE is_published = false');
        return result.rows;
    }

    // retrouver une annonce
    static async findOne(id) {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE is_published = false AND id = $1', [id]);
        return result.rows[0];
    }

    // inserer une annonce avec la fonction sql insert_ad
    static async insertEvent(ad) {
        const savedAd = await client.query('SELECT * FROM insert_ad($1)', [ad]);
        return savedAd.rows[0];
    }

    // inserer une annonce avec la fonction sql insert_ad
    static async insertApplication(userId, adId) {
        const applyToAd = await client.query('INSERT INTO candidate_per_event("event_id", "users_id") VALUES ($1, $2) RETURNING *', [adId, userId]);
        return applyToAd.rows[0];
    }

    // supprimer une annonce
    static async delete(id) {
        const result = await client.query('DELETE FROM "event" WHERE id = $1', [id]);
        return result.rowCount;
    }
};
