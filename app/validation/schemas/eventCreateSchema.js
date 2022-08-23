const Joi = require('joi').extend(require('@joi/date'));

module.exports = {
    name: Joi.string().required().max(100),
    description: Joi.string(),
    picture_url: Joi.string(),
    owner_id: Joi.number(),
    address: Joi.string(),
    county: Joi.string().max(50),
    is_published: Joi.boolean(),
    is_archived: Joi.boolean(),
    event_date: Joi.date().format('DD/MM/YYYY'),
    external_link: Joi.string(),
    event_type: Joi.string(),
    type_of_music_needed: Joi.string().max(100),
};
