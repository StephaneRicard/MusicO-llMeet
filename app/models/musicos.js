const client = require('../client/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Musicos extends CoreDatamapper {
    static tableName = 'musicos_with_musical_type';

    // création méthode pour mettre a jour la table users d'un musicos
    // (on utilise la fonction sql update_musicos)
    static async updateUsers(id, user) {
        const savedMusicos = await client.query('SELECT * FROM update_musicos($1,$2)', [id, user]);
        return savedMusicos.rows[0];
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

    static async delete(id) {
        const result = await client.query('DELETE FROM users WHERE id =$1', [id]);
        return result.rowCount;
    }
};
