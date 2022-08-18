const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name'],
    },
    email: {
        type: String,
        required: [true, 'Email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password'],
    },
},
{
    // Pour created_ad et updated_at auto générés
    timestamps: true,
},
);

module.exports = mongoose.model('User', userSchema);
