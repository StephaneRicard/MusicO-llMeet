const { transporter } = require('../helpers/nodemailer');

module.exports = {
/**
* display formulaire de contact de l'équipe
* @param {request} req request object
* @param {response} res response json
* @method {POST}
*/
    async contactForm(req, res) {
        const {
            name,
            email,
            role,
            textEmail,
        } = req.body;
        console.log('req.body :', name, email, role);
        const resultSendMail = await transporter.sendMail({
            from: `${email}`,
            to: 'NodeMailer Oauth2',
            subject: `${name} nous envoie des bisous`,
            text: `Bonjour, je suis un(e) ${role} et voici mon plus beau poeme ! - ${textEmail}`,
        });
        console.log(resultSendMail);
        return res.json('email envoyé', email);
    },
};
