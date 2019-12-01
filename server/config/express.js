var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    config = require('./config'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
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
    app.use('/signup', subscriptionRouter);

    //all other requests send to the homepage
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname + '../../../client/public/index.html'));
    });

    return app;
};