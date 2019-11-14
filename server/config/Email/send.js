const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const config = require('./emailConfig');

module.exports = async (to, subject_line, message, html) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.user,
            pass: config.pass
        }
    });

    let mailOptions = {
        from: 'FaceR <noreply@faceR.com>',
        to: to,
        subject: subject_line,
        text: message,
        html: html
    };

    let promise = new Promise((resolve, reject) => {
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
    return promise;



};