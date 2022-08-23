const Joi = require('joi');

module.exports = {
    name: Joi.string().required().max(100),
    picture_url: Joi.string(),
    email: Joi.string.email().minDomainSegments(2),
    city: Joi.string().max(50),
    county: Joi.string().max(50),
    role: Joi.string().pattern(/^musicos$|^momer$/),
    password: Joi.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    phone: Joi.string().min(10).max(15),
    address: Joi.string(),
    description: Joi.string().max(500),
    musicians_number: Joi.number(),
    groupe_leader: Joi.string().max(100),
    external_url: Joi.string(),
    momer_to_contact: Joi.string().max(100),
    momer_type_id: Joi.number(),

};
