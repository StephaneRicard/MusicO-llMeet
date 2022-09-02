const { transporter } = require('../helpers/nodemailer');

module.exports = {

    async postForm(req, res) {
        const {
            name,
            email,
            role,
            textEmail,
        } = req.body;
        // if (!email) {
        //     const emailConnectedUser = user.email;
        // }
        console.log('req.body :', name, email, role, textEmail);
        const resultSendMail = await transporter.sendMail({
            from: `${email}`,
            to: 'meetollmusical@gmail.com',
            subject: `${name} nous envoie des bisous`,
            text: `Bonjour, je suis un(e) ${role} et voici mon plus beau poeme ! - ${textEmail}`,
        });
        if (!resultSendMail) {
            res.status(400);
            throw new Error('Error, mail could not be send');
        } else {
            return res.json('email envoyé');
        }
    },
};
