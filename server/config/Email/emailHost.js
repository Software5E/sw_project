const emails = require('./emailList');
const sendMail = require('./send');
const config = require('./emailConfig');

//Function to synchronously send newsletter to mailing list
module.exports = async (html) => {
    for (const email of emails){
        await sendMail(email, 'Subject', 'Placeholder Text', html);
    }
};