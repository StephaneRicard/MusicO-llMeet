const CoreDatamapper = require('./coreDatamapper');

module.exports = class Musicos extends CoreDatamapper {
    static tableName = 'musicos_with_musical_type';
};
