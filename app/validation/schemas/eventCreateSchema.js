const Joi = require('joi').extend(require('@joi/date'));

module.exports = Joi.object({
    name: Joi.string().required().max(100).required(),
    description: Joi.string(),
    picture_url: Joi.string(),
    owner_id: Joi.number(),
    address: Joi.string().required(),
    county: Joi.string().max(50).required(),
    is_published: Joi.boolean(),
    is_archived: Joi.boolean(),
    event_date: Joi.date().required(),
    external_link: Joi.string(),
    event_type: Joi.string().required(),
    type_of_music_needed: Joi.string().max(100),
});
