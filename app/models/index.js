const momerDatamapper = require('./momer');
const mongoose = require('mongoose');

const indexSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            // A qui fait référence l'ObjectId
            ref: 'User',
        },
        text: {
            type: String,
            required: [true, 'Text'],
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('index', indexSchema);

module.exports = { momerDatamapper };
