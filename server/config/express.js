var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    config = require('./config'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    sendMail = require('./Email/send');
    fs = require('fs');
    emails = require('./Email/emailList');
    host = require('./Email/emailHost');
    //exampleRouter = require('../routes/examples.server.routes')
    subscriptionRouter = require('../routes/subscription.server.routes')
    const cors = require("cors");

module.exports.init = function () {
    //connect to database
    mongoose.connect(config.db.uri, {
         useNewUrlParser: true, useUnifiedTopology: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    //initialize app
    var app = express();

    //enable request logging for development debugging
    app.use(morgan('dev'));

    app.use(cors());

    //body parsing middleware 
    app.use(bodyParser.json());

    //serve client files
    app.use(express.static(path.join(__dirname, '../../client/build')));

    //add a router
    //app.use('/api/example', exampleRouter);
    app.put('/email',(req,res) => {
        //Need to receive file from admin console
        fs.readFile(path.join(__dirname,"/Email/NewsLetter/letter.html"), (err,data) => {
            if (err) throw err;
            host(data);
        });
        res.send('Emails Sent');
    });
    app.use('/signup', subscriptionRouter);

    //all other requests send to the homepage
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname + '../../../client/public/index.html'));
    });

    return app;
};