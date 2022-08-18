// personnalisation erreur avec la classe ApiError

module.exports = class ApiError extends Error {
    constructor(message, infos) {
        super(message);
        this.name = 'ApiError';
        this.infos = infos;
    }
};
