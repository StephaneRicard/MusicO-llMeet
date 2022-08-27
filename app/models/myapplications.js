const client = require('../client/pg');

module.exports = class myapplications {
    // findAll applications user applied
    static async findAll(myUserId) {
        const result = await client.query('SELECT * FROM candidate_per_event WHERE "users_id" = $1', [myUserId]);
        return result.rows;
    }

    // findOne applications user applied
    // static async findOne(myUserId, myApplicationId) {
    //     const result = await client.query('SELECT * FROM candidate_per_event WHERE "users_id" = $1 AND "id" = $2', [myUserId, myApplicationId]);
    //     return result.rows[0];
    // }

    static async findOne(myApplicationId) {
        const result = await client.query('SELECT * FROM candidate_per_event WHERE "id" = $1', [myApplicationId]);
        return result.rows[0];
    }

    // delete application to an ad
    static async delete(myUserId, myApplicationId) {
        const result = await client.query('DELETE FROM "candidate_per_event" WHERE "users_id" = $1 AND "id" = $2', [myUserId, myApplicationId]);
        return result.rowCount;
    }
};
