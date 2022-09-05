const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().required().max(100),
    email: Joi.string().email({ minDomainSegments: 2 }),
    city: Joi.string().max(50),
    county: Joi.string().max(50),
    role: Joi.string().pattern(/^musicos$|^momer$/),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    password2: Joi.ref('password'),
});
