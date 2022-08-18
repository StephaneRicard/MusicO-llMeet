const http = require('http');
require('dotenv').config();
const debug = require('debug')('app:server');
const app = require('./app');
const { errorHandler } = require('./app/errors/apiError');

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/api/index', require('./app/routers/index'));
app.use('/api/users', require('./app/routers/userRoutes'));
const port = process.env.PORT || 3000;

app.use(errorHandler);

const server = http.createServer(app);

server.listen(port, () => {
    debug(`Listening on ${port}`);
});
