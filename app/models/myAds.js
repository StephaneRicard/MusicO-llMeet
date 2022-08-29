/* eslint-disable max-len */
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

    // retrouver le détail d'un candidature à une annonce
    static async findApplicationDetail(id) {
        const result = await client.query('SELECT * FROM application_by_musicos WHERE application_id=$1', [id]);
        return result.rows[0];
    }

    // mettre à jour le statut d'une candidature à une annonce
    static async updateApplicationStatus(id, statusId) {
        const result = await client.query('SELECT * FROM update_status($1, $2)', [id, statusId]);
        return result.rows[0];
    }
};
