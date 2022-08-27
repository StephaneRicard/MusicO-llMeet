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

    // // voir le detail d'une candidature liée à une de mes annonces
    // static async findMyEvent(eventId) {
    //     const result = await client.query('SELECT * FROM event WHERE "id" = $1 AND is_published = false', [eventId]);
    //     return result.rows[0];
    // }

    // static async findOneApplication(candidateId) {
    //     // eslint-disable-next-line max-len
    //     // const result = await client.query('SELECT * FROM candidate_per_event WHERE "users_id" = $1 AND "event_id" = $2', [candidateId, eventId]);
    //     const result = await client.query('SELECT * FROM users WHERE "id" = $1 AND role = musicos', [candidateId]);
    //     return result.rows[0];
    // }

    // // update le status d'un candidat (accepté, refusé)
    // static async updateCandidateStatus(eventId, candidateId, reqBody) {
    //     const result = await client.query('SELECT * FROM candidate_per_event($1, $2) WHERE event_id=$1 AND users_id=$2 AND candidate_status_id=$3', [eventId, candidateId, reqBody]);
    //     return result.rows[0];
    // }

    static async findApplicationDetail(id) {
        const result = await client.query('SELECT * FROM application_by_musicos WHERE application_id=$1', [id]);
        return result.rows[0];
    }

    static async updateApplicationStatus(id, statusId) {
        const result = await client.query('SELECT * FROM update_status($1, $2)', [id, statusId]);
        return result.rows[0];
    }
};
