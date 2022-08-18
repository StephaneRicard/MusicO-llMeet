const express = require('express');

const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userController');
const { protect } = require('../errors/authentificationError');

// register
router.post('/', registerUser);

// login
router.post('/login', loginUser);

// user infos
router.get('/me', protect, getMe);

module.exports = router;
