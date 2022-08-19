const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const session = require('express-session');
// const asyncHandler = require('express-async-handler');
const userDataMapper = require('../models/user');

function generateAccessToken(user) {
    return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s',
    });
}

// function generateRefreshToken(userTest) {
//     return jwt.sign(userTest, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });
// }

const authentification = {

    // generateToken(user) {
    //     return jwt.sign(user, process.env.JWT_SECRET, {
    //         expiresIn: '15s',
    //     });
    // },

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
        console.log(user);

        // check email
        if (!user) {
            res.status(401).send('email not valid');
        }
        // check password
        if (password !== user.password) {
            res.status(401).send('password not valid');
        } else (await bcrypt.compare(password, user.password));
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.city,
            county: user.county,
            token: generateAccessToken(user.id),
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
        console.log(userExists);

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
        console.log(userCreation);
        if (userCreation) {
            res.status(201).json({
                id: userCreation.id,
                name: userCreation.name,
                email: userCreation.email,
                city: userCreation.city,
                county: userCreation.county,
                role: userCreation.role,
                token: generateAccessToken(userCreation.id),
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    },

    // const getMe = asyncHandler(async (req, res) => {
    //     res.status(200).json(req.user);
    // })

    // Generate JWT
    // const generateToken = (id) => {
    //     return jwt.sign({
    //         id,
    //     }, process.env.JWT_SECRET, {
    //         expiresIn: '30d',
    //     })
    // }

};

module.exports = {
    authentification,
};
