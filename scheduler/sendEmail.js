const nodemailer = require('nodemailer');
const juice = require('juice');
const htmlToText = require('html-to-text');
const renderEmailHTML = require('./renderEmailHTML');

const devTrans = {
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: process.env.MAILTRAP_USER,
		pass: process.env.MAILTRAP_PASS,
	}
}

const prodTrans = {
	service: 'SendGrid',
	auth: {
		user: process.env.SENDGRID_USER,
		pass: process.env.SENDGRID_PASS,
	}
}

const trans = process.env.NODE_ENV !== 'production' ? devTrans : prodTrans;
const transport = nodemailer.createTransport(trans);

const sendEmail = (profile) => {

	const html = juice(renderEmailHTML(profile.grants));

	const text = htmlToText.fromString(html);

	const mailOptions = {
		to: profile.email,
		from: 'no-reply@grantsreminder.com',
		subject: 'some upcoming grant deadlines',
		html,
		text
	}

	transport.sendMail(mailOptions, (err, info) => {
		if (err) {
			return console.error(err);
		}
		return console.log('email sucess');
	})
}

module.exports = sendEmail;
