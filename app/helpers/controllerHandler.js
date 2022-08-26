// middleware de centralisation des try catch
// (utilisé dans les routes pour encapsulé les controllers)
module.exports = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    } catch (err) {
        next(err);
    }
};
