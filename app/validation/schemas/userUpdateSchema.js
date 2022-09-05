const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().required().max(100),
    picture_url: Joi.string(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    city: Joi.string().max(50).required(),
    county: Joi.string().max(50).required(),
    role: Joi.string().pattern(/^musicos$|^momer$/),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    password2: Joi.ref('password'),
    phone: Joi.string().min(10).max(15),
    address: Joi.string(),
    description: Joi.string().max(500),
    musicians_number: Joi.number(),
    group_leader: Joi.string().max(100),
    musical_type: Joi.array(),
    external_url: Joi.string(),
    momer_to_contact: Joi.string().max(100),
    momer_type_id: Joi.number(),
});
