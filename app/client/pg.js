const { Pool } = require('pg');

const client = new Pool(process.env.PG_URL);

client.connect();

module.exports = client;
