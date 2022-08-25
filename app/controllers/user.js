const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../helpers/generateToken');
const { ApiError } = require('../helpers/errorHandler');
// eslint-disable-next-line import/order
const jwt = require('jsonwebtoken');

const { userDatamapper } = require('../models');

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
        const verifEmail = req.body.email;
        const verifPassword = req.body.password;
        const user = await userDatamapper.findOneByPassworAndEmail(verifEmail, verifPassword);
        // check email & password
        if (!user) {
            res.status(401).send('email or passwords not valid');
        }

        // check password bcrypt
        const isPasswordValid = bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Wrong password.');
        }

        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.city,
            county: user.county,
            role: user.role,
            token: generateAccessToken(user),
        });
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
        const userExists = await userDatamapper.findOneByEmail({
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
        const userCreation = await userDatamapper.create({
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

    async getOne(req, res) {
        const userId = parseInt(req.user.id, 10);

        const user = await userDatamapper.findOne(userId);

        if (!user) {
            throw new ApiError('user does not exists', { statusCode: 404 });
        }

        return res.json(user);
    },

    // deconnexion
    logout: (req, res) => {
        const authHeader = req.headers.authorization;
        jwt.sign({ authHeader }, ' ', { expiresIn: 1 }, (logout, err) => {
            if (logout) {
                console.log(logout);
                res.json({ msg: 'Vous avez été déconnecté' });
            } else {
                res.json(err);
            }
        });
    },

    async delete(req, res) {
        const userId = req.user.id;
        const user = await userDatamapper.findOne(userId);
        if (!user) {
            throw new ApiError('user does not exists', { statusCode: 404 });
        }

        const result = await userDatamapper.delete(userId);
        return res.status(204).json(`delete ${result} ok`);
    },

    async update(req, res) {
        const userId = req.user.id;
        const { role } = req.user;
        const user = await userDatamapper.findOne(userId);
        if (!user) {
            throw new ApiError('user does not exists', { statusCode: 404 });
        }

        await userDatamapper.update(userId, req.body);
        // si les musical type sont modifiés on supprime les acniens musical types
        // type qui était présent dans la table de liaison
        if (role === 'musicos') {
            await userDatamapper.deleteMusicalType(userId);

            // on rajoute les nouveaux dans la table de liaison
            req.body.musical_type.forEach(
                async (musicalType) => {
                    await userDatamapper.updateMusicalType(musicalType, userId);
                },
            );
        }

        res.json(user);
    },
};
