const express = require('express');
const session = require('express-session');
const cors = require('cors');

const router = require('./routers');

const app = express();

// On active le middleware pour parser le payload JSON
app.use(express.json());
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({
    extended: true,
}));

app.use(
    session({
        secret: 'supersecret',
        resave: false,
        saveUninitialized: true,
    }),
);

// On lève la restriction CORS
app.use(cors(process.env.CORS_DOMAINS || '*'));

app.use(router);

module.exports = app;
