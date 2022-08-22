const client = require('../client/pg');

module.exports = class User {
    static async findOneByEmail(email) {
        const result = await client.query('SELECT * FROM "users" WHERE email=$1', [email]);
        return result.rows[0];
    }

    static async findOne(id) {
        const result = await client.query('SELECT * FROM "users" WHERE id=$1', [id]);
        return result.rows[0];
    }

    // create user in database
    static async create(values) {
        const {
            name,
            email,
            city,
            county,
            role,
            password,
        } = values;
        const sql = 'INSERT INTO "users" ("name", "email", "city", "county", "role", "password") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

        const result = await client.query(sql, [name, email, city, county, role, password]);
        return result.rows[0];
    }
};
