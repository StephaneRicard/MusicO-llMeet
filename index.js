const http = require('http');
require('dotenv').config();
const debug = require('debug')('app:server');
const app = require('./app');

<<<<<<< HEAD
const port = process.env.PORT ?? 3024;
=======
const port = process.env.PORT ?? 3005;
>>>>>>> 952f8b16c69ee63a8b687c7cbb726fed9c0cdbb1

const server = http.createServer(app);

server.listen(port, () => {
    debug(`Listening on ${port}`);
});
