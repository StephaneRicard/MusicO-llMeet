const client = require('../client/pg');

module.exports = class Ad {
    // retrouver toutes les annonces
    static async findAll() {
        const result = await client.query('SELECT * FROM event WHERE is_published = false');
        return result.rows;
    }

    // retrouver une annonce
    static async findOne(id) {
        const result = await client.query('SELECT * FROM event WHERE is_published = false AND id = $1', [id]);
        return result.rows[0];
    }

    // inserer une annonce avec la fonction sql insert_ad
    static async insert(event) {
        const savedAd = await client.query('SELECT * FROM insert_ad($1)', [event]);
        return savedAd.rows[0];
    }
};
