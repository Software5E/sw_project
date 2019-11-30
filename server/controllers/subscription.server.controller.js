var mongoose = require('mongoose'),
    Subscription = require('../models/subscription.server.model.js');   

exports.hello = function(req, res) {
    res.send('world')
};

//creates new subscription in mongoDB
exports.create = function(req, res) {

    //creates new subscription
    var subscrip = new Subscription(req.body);

    //Then save the listing 
  subscrip.save(function(err) {
    if(err) {
      console.log('error! signup not added successfully');
      res.status(400).send(err);
    } else {
      res.json(subscrip);
      console.log('signup added successfully!')
    }
  });
}

exports.read = function(req, res) {
    //send back the individual subscription as json from the request
  res.json(req.subscrip);
};

exports.update = function(req, res) {
    var subscrip = req.subscrip

    subscrip.name = req.body.name
    subscrip.email = req.body.email

    subscrip.save(function(err) {
        if(err)
        {
          console.log(err);
          res.status(400).send(err);
        }
        else
        {
          console.log(subscrip);
          res.json(subscrip);
        }
      })
};

exports.delete = function(req, res) {
    var subscrip = req.subscrip;
    console.log(subscrip);

    Subscription.remove({'email': subscrip.email}, function(err, result) {
        if(err)
    {
      res.status(400).send(err);
    }
    console.log(result);
    res.json(result);
    });
};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {

  Subscription.find({}).sort('name').exec(function(err, subscrips) {
    if(err)
    {
      res.send(err);
    }
    //console.log(listings);
    res.json(subscrips)
  }); 
};

/* 
  Middleware: find a subscription by its ID, then pass it to the next request handler. 

  HINT: Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.subscriptionById = function(req, res, next, id) {
    Subscription.findById(id).exec(function(err, subscrip) {
      if(err) {
        res.status(400).send(err);
      } else {
        req.subscrip = subscrip;
        next();
      }
    });
};

