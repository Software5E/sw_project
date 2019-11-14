const emails = require('./emailList');
const sendMail = require('./send');
const config = require('./emailConfig');
module.exports = async (html) => {
    for (const email of emails){
        await sendMail('haydenmenge@gmail.com', 'Subject', 'Placeholder Text', html);
    }
};