const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().required().max(100),
    picture_url: Joi.string().allow(''),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    city: Joi.string().max(50).required(),
    county: Joi.string().max(50).required(),
    role: Joi.string().pattern(/^musicos$|^momer$/),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    password2: Joi.ref('password'),
    phone: Joi.string().min(10).max(15).allow(''),
    address: Joi.string().allow(''),
    description: Joi.string().max(500).allow(''),
    musicians_number: Joi.number().allow(''),
    group_leader: Joi.string().max(100).allow(''),
    musical_type: Joi.array().allow(''),
    external_url: Joi.string().allow(''),
    momer_to_contact: Joi.string().max(100).allow(''),
    momer_type_id: Joi.number(),
});
