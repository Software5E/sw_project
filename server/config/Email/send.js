const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const config = require('./emailConfig');


//send html version of newsletter to one person in list
module.exports = async (to, subject_line, message, html) => {
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
        to: to,
        subject: subject_line,
        text: message,
        html: html
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