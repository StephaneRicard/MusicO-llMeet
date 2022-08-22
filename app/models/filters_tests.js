const client = require('../client/pg');

const reqQuery = req.query;

module.exports = class Event {
    // EVENTS - filter by county
    static async filterAllEventsByCounty(reqQuery) {
        const result = await client.query('SELECT * FROM event WHERE county = $1 AND is_published = true', [reqQuery]);
        return result.rows;
    }

    // EVENTS - filter by date
    static async filterAllEventsByDate(reqQuery) {
        const result = await client.query('SELECT * FROM event WHERE event_date = $1 AND is_published = true', [reqQuery]);
        return result.rows;
    }

    // EVENTS - filter by musical type
    static async filterAllEventsByMusicalType(reqQuery) {
        const result = await client.query('SELECT * FROM event WHERE type_of_music_needed = $1 AND is_published = true', [reqQuery]);
        return result.rows;
    }

    // MOMERS - filter by county
    static async filterAllMomersByCounty(reqQuery) {
        const result = await client.query('SELECT * FROM users WHERE county = $1 AND role = momer', [reqQuery]);
        return result.rows;
    }

    // MOMERS - filter by city
    static async filterAllMomersByCity(reqQuery) {
        const result = await client.query('SELECT * FROM users WHERE city = $1 AND role = momer', [reqQuery]);
        return result.rows;
    }

    // MOMERS - filter by momer type
    static async filterAllMomersByMomerType(reqQuery) {
        const result = await client.query('SELECT * FROM users WHERE momer_type_id = $1 AND role = momer', [reqQuery]);
        return result.rows;
    }

    // MUSICOS - filter by county
    static async filterAllMusicosByCounty(reqQuery) {
        const result = await client.query('SELECT * FROM users WHERE county = $1 AND role = musicos', [reqQuery]);
        return result.rows;
    }

    // MUSICOS - filter by city
    static async filterAllMusicosByCity(reqQuery) {
        const result = await client.query('SELECT * FROM users WHERE city = $1 AND role = musicos', [reqQuery]);
        return result.rows;
    }

    // MUSICOS - filter by musical type
    static async filterAllMusicosMusicType(reqQuery) {
        const result = await client.query('SELECT * FROM users WHERE musical_type_id = $1 AND role = musicos', [reqQuery]);
        return result.rows;
    }

    // ADS - filter by county
    static async filterAllAdssByCounty(reqQuery) {
        const result = await client.query('SELECT * FROM event WHERE county = $1 AND is_published = false', [reqQuery]);
        return result.rows;
    }

    // ADS - filter by date
    static async filterAllAdsByDate(reqQuery) {
        const result = await client.query('SELECT * FROM event WHERE event_date = $1 AND is_published = false', [reqQuery]);
        return result.rows;
    }

    // ADS - filter by musical type
    static async filterAllAdsByMusicalType(reqQuery) {
        const result = await client.query('SELECT * FROM event WHERE type_of_music_needed = $1 AND is_published = false', [reqQuery]);
        return result.rows;
    }
};