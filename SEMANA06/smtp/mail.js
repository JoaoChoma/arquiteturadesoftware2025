const nodemailer = require('nodemailer');

// Configurar o transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail', // Para Gmail, use "gmail". Para outros, configure host e porta manualmente.
    auth: {
        user: 'joaochoma@gmail.com', // Seu e-mail SMTP
        pass: 'fxbg lbpn cfgi jiqh' // Sua senha de app (NÃO use a senha normal do e-mail)
    }
});

// Configurar o e-mail a ser enviado
const mailOptions = {
    from: 'joaochoma@gmail.com',
    to: 'joaochoma@gmail.com', // Pode ser um ou vários destinatários
    subject: 'Teste de e-mail via Node.js',
    text: 'Olá! Este é um e-mail enviado via Nodemailer usando SMTP.',
    html: '<h2>Olá!</h2><p>Este é um e-mail enviado via <strong>Nodemailer</strong> usando SMTP.</p>'
};

// Enviar o e-mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erro ao enviar o e-mail:', error);
    } else {
        console.log('E-mail enviado com sucesso:', info.response);
    }
});
