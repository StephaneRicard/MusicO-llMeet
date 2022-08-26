const client = require('../client/pg');

module.exports = class User {
    // retrouver un user en fonction de son mail
    static async findOneByEmail(email) {
        const result = await client.query('SELECT * FROM "users" WHERE email=$1', [email]);
        return result.rows[0];
    }

    // retrouver un user en fonction de son id
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

    static async delete(id) {
        const result = await client.query('DELETE FROM users WHERE id =$1', [id]);
        return result.rowCount;
    }

    // création méthode pour mettre a jour la table users d'un musicos
    // (on utilise la fonction sql update_musicos)
    static async updateUsers(id, user) {
        const savedMusicos = await client.query('SELECT * FROM update_users($1,$2)', [id, user]);
        return savedMusicos.rows[0];
    }

    // retrouver les genres musicaux d'un musicos
    static async findMusicalType(userId) {
        const musicalTypes = await client.query('SELECT * FROM musical_type_per_users WHERE users_id =$1', [userId]);
        return musicalTypes.rows;
    }

    // création méthode pour inserer les nouveaux musical type d'un musicos
    // dans la table musical_type_per_users avec la fonction sql update_musical_type
    static async updateMusicalType(musicalType, userId) {
        const savedMusicalType = await client.query('SELECT * FROM update_musical_type($1, $2)', [musicalType, userId]);
        return savedMusicalType.rows;
    }

    // création méthode pour supprimer les anciens musical type d'un musicos
    // de la table musical_type_per_users
    static async deleteMusicalType(userId) {
        const result = await client.query('DELETE FROM musical_type_per_users WHERE users_id = $1', [userId]);
        return result.rowCount;
    }
};
