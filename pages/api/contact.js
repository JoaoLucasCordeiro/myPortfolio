// pages/api/contact.js

import nodemailer from 'nodemailer';
import nc from 'next-connect';

const handler = nc();

handler.post(async (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  // Configurar o transporte do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'seu-servico-de-email', // ex: 'gmail'
    auth: {
      user: 'seu-email@gmail.com',
      pass: 'sua-senha',
    },
  });

  // Configurar a mensagem de e-mail
  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'seu-email-destino@gmail.com',
    subject: assunto,
    text: `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`,
  };

  try {
    // Enviar o e-mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao enviar o e-mail' });
  }
});

export default handler;
