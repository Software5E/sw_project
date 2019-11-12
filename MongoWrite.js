'use strict';

var //fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Subscription = require('./SubscriptionSchema.js'), 
    config = require('./server/config/config.js');

    //require statement to connect to mongoose
    mongoose.connect(config.db.uri, {useNewUrlParser: true});
