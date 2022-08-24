const client = require('../client/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class MyAds extends CoreDatamapper {
    static tableName = 'event_with_candidates';

    static async findAllPersonnalAds(id) {
        const result = await client.query('SELECT * FROM event_with_candidate WHERE owner_id = $1 AND is_published = false', [id]);
        return result.rows;
    }
};
