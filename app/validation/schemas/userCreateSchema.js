const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().required().max(100),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    city: Joi.string().max(50).required(),
    county: Joi.string().max(50).required(),
    role: Joi.string().pattern(/^musicos$|^momer$/).required(),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required(),
    password2: Joi.ref('password'),
});
