// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../helpers/generateToken');
// const session = require('express-session');
// const asyncHandler = require('express-async-handler');
const { userDataMapper } = require('../models');

// function generateAccessToken(user) {
//     return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: '15s',
//     });
// }

module.exports = {

    // login
    async loginUser(req, res) {
        const {
            email,
            password,
        } = req.body;
        if (!email || !password) {
            throw new Error('Please fill the fields');
        }
        const user = await userDataMapper.findOneByEmail(email);

        // check email
        if (!user) {
            res.status(401).send('email not valid');
        }
        // check password
        const isPasswordValid = bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Wrong password.');
        }

        // if (password !== user.password) {
        //     res.status(401).send('password not valid');
        // } else (await bcrypt.compare(password, user.password));
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.city,
            county: user.county,
            token: generateAccessToken(user),
        });

        // creating the session
    },

    // registration
    async registerUser(req, res) {
        const {
            name,
            email,
            city,
            county,
            role,
            password,
        } = req.body;

        if (!name || !email || !city || !county || !role || !password) {
            res.status(400);
            throw new Error('Please add all fields');
        }

        // Check if user exists
        const userExists = await userDataMapper.findOneByEmail({
            email,
        });

        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const userCreation = await userDataMapper.create({
            name,
            email,
            city,
            county,
            role,
            password: hashedPassword,
        });

        if (userCreation) {
            res.status(201).json({
                id: userCreation.id,
                name: userCreation.name,
                email: userCreation.email,
                city: userCreation.city,
                county: userCreation.county,
                role: userCreation.role,
                token: generateAccessToken(userCreation),
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    },
};
