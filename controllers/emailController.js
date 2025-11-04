const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendContractEmail = (to, subject, text, pdfAttachment, filename) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    attachments: [
      {
        filename: filename || 'contrato.pdf',
        content: pdfAttachment,
        contentType: 'application/pdf',
      },
    ],
  };

  return transporter.sendMail(mailOptions);
};
