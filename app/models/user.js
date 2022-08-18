const client = require('../client/pg');

module.exports = class CoreDatamapper {
    // verify if email exists in the database
    static async findOne(email) {
        const result = await client.query('SELECT email FROM "user" WHERE email=$1', [email]);
        return result.rows[0];
    }

    // create user in database
    static async create(values) {
        const {
            name, email, city, county, password,
        } = values;
        const sql = {
            text: `
            INSERT INTO "user" ("name", "email", "city", "county", "role, "password")
            VALUES ($1, $2, $3);
            `,
            values: [
                name,
                email,
                city,
                county,
                password,
            ],
        };
        const result = await client.query(sql);
        return result.row[0];
    }

    // pick a user from database
    static async findByUser(email) {
        const result = await client.query('SELECT * FROM "user" WHERE email=$1', [email]);
        return result.rows[0];
    }
};
