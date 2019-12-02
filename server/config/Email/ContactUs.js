const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const config = require('./emailConfig');


module.exports = async (subject_line, message) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.zoho.com',
        auth: {
            user: config.user,
            pass: config.pass
        }
    });

    let mailOptions = {
        from: 'comingsoon@facerlock.com',
        to: 'alex@facerlock.com',
        subject: subject_line,
        text: message,
    };

    return promise = new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                reject();
            } else {
                console.log('Email sent: ' + info.response);
                resolve();
            }
        });
    });
};