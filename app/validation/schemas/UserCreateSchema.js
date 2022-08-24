const Joi = require('joi');

module.exports = {
    name: Joi.string().required().max(100),
    email: Joi.string.email().minDomainSegments(2),
    city: Joi.string().max(50),
    county: Joi.string().max(50),
    role: Joi.string().pattern(/^musicos$|^momer$/),
    password: Joi.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),

};
