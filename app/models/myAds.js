const client = require('../client/pg');

module.exports = class MyAds {
    // retrouver toutes les annonces d'un momer
    static async findAll(id) {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE "owner_id" = $1 AND is_published = false', [id]);
        return result.rows;
    }

    // retrouver le detail d'une annonce d'un momer
    static async findOne(ownerId, adId) {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE "owner_id" = $1 AND "id" = $2 AND is_published = false', [ownerId, adId]);
        return result.rows[0];
    }

    // supprimer une annonce
    static async delete(ownerId, adId) {
        const result = await client.query('DELETE FROM event WHERE "owner_id" = $1 AND "id" = $2 AND is_published = false', [ownerId, adId]);
        return result.rowCount;
    }

    // mettre à jour une annonce
    static async update(id, ad) {
        const result = await client.query('SELECT * FROM update_event($1, $2) WHERE id=$1 AND is_published = false', [id, ad]);
        return result.rows[0];
    }

    // voir le detail d'une candidature liée à une de mes annonces
    static async findOneApplication(candidateId) {
        const result = await client.query('SELECT * FROM users WHERE "id" = $1 AND "role" = "musicos"', [candidateId]);
        return result.rows[0];
    }
};
