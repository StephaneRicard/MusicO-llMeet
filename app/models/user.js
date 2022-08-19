const client = require('../client/pg');

module.exports = class CoreDatamapper {
    // verify if email exists in the database
    static async findOneByEmail(email) {
        const result = await client.query('SELECT * FROM "user" WHERE email=$1', [email]);
        return result.rows[0];
    }

    static async findAllEmail() {
        const result = await client.query('SELECT email FROM "user"');
        return result.rows[0];
    }

    static async findOne(id) {
        const result = await client.query('SELECT * FROM "user" WHERE id=$1', [id]);
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
        const sql = {
            text: `
            INSERT INTO "user" ("name", "email", "city", "county", "role", "password")
            VALUES ($1, $2, $3, $4, $5, $6);
            `,
            values: [
                name,
                email,
                city,
                county,
                role,
                password,
            ],
        };
        const result = await client.query(sql);
        console.log(result);
        return result.rows;
    }

    // pick a user from database
    static async findByUserPassword(password) {
        const result = await client.query('SELECT password FROM "user" WHERE password=$1', [password]);
        return result.rows[0];
    }
};
