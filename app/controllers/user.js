const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const asyncHandler = require('express-async-handler');

const user = {
    id: 3,
    name: 'Jean',
    email: 'jeanmusicos@gmail.com',
    admin: true,
};

function generateAccessToken(userTest) {
    return jwt.sign(userTest, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1000s' });
}

function generateRefreshToken(userTest) {
    return jwt.sign(userTest, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });
}
// // Check if User exists
// const userExists = await User.findOne({
//     email,
// });

// if (userExists) {
//     res.status(400);
//     throw new Error('Email already exists');
// }

// // Hash password
// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash(password, salt);

// // Create user
// const user = await User.create({
//     name,
//     email,
//     password: hashedPassword,
// });

// if (user) {
//     res.status(201).json({
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         token: generateToken(user.id),
//     });
// } else {
//     res.status(400);
//     throw new Error('Invalid user data');
// }

// res.json({
//     message: 'Register User',
// });

// // Login/Authenticate - POST - /api/users/login
// const loginUser = asyncHandler(async (req, res) => {
//     const {
//         email,
//         password,
//     } = req.body;

//     // Check for user email
//     const user = await User.findOne({
//         email,
//     });

//     if (user && (await bcrypt.compare(password, user.password))) {
//         res.json({
//             id: user.id,
//             name: user.name,
//             email: user.email,
//             token: generateToken(user.id),
//         });
//     } else {
//         res.status(400);
//         throw new Error('Invalid credentials');
//     }
// });

const authentification = {

    // Generate Token
    apiLogin(req, res) {
        // check email in database
        if (req.body.email !== user.email) {
            res.status(401).send('invalid credentials');
            return;
        }
        if (req.body.password !== 'cuillere') {
            res.status(401).send('invalid credentials');
            return;
        }
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.send({
            accessToken,
            refreshToken,
        });
    },

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
    authentification,
};
