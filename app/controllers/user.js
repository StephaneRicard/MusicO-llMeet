const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const asyncHandler = require('express-async-handler');

const user = require('../models/user');
const CoreDatamapper = require('../models/user');

// console.log(CoreDatamapper.findOneByEmail.email);
async function getOneByEmail(req, res) {
    const userId = req.params.id;
    const userTry = await CoreDatamapper.findOne(userId);
    const { email } = userTry;
    res.json(email);
}

function generateAccessToken(userTest) {
    return jwt.sign(userTest, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1000s' });
}

function generateRefreshToken(userTest) {
    return jwt.sign(userTest, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });
}

const authentification = {

    // login
    apiLogin(req, res) {
        // check email
        if (req.body.email !== CoreDatamapper.findOneByEmail.email) {
            res.status(401).send('email not valid');
            return;
        }
        // check password
        if (req.body.password !== CoreDatamapper.findOneByEmail.password) {
            res.status(401).send('password not valid');
            return;
        }
        // if success -> generate Token
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.send({
            accessToken,
            refreshToken,
        });
        // eslint-disable-next-line no-console
        console.log('accessToken', accessToken);
    },

    // registration
    async apiRegistration(req, res) {
        const {
            name, email, city, county, role, password,
        } = req.body;

        if (!name || !email || !password) {
            res.status(400);
            throw new Error('Please add all fields');
        }

        // Check if user exists
        const userExists = await CoreDatamapper.findByEmail({ email });

        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const userBam = await CoreDatamapper.create({
            name,
            email,
            city,
            county,
            role,
            password: hashedPassword,
        });

        if (userBam) {
            res.status(201).json({
                id: userBam.id,
                name: userBam.name,
                email: userBam.email,
                city: userBam.city,
                county: userBam.county,
                role: userBam.role,
                token: generateAccessToken(userBam.id),
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    },

    // INSERER USER DANS TABLE

    // apiRefresh(req, res) {
    //     const authHeader = req.headers['authorization'];
    //     const token = authHeader && authHeader.split(' ')[1];
    //     if (!token) {
    //         return res.sendStatus(401);
    //     }
    //     jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //         if (err) {
    //             return res.sendStatus(401);
    //         }
    //         // check in database to see if user still has the rights to be logged-in
    //         delete user.iat;
    //         delete user.exp;
    //         const refreshedToken = generateAccessToken(user);
    //         res.send({
    //             accessToken: refreshedToken,
    //         });
    //     });
    // },
};

module.exports = {
    authentification, getOneByEmail,
};
