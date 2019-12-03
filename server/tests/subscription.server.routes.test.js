var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'),
    mongoose = require('mongoose'),  
    Subscription = require('../models/subscription.server.model.js');

/* Global variables */
var app, agent, subscription, id;
var subscription2, id2;

/* Unit tests for testing server side routes for the listings API */
describe('Subscription CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

  it('should be able to retrieve all subscriptions', function(done) {
    agent.get('/signup')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        /*res.body.should.have.length(147);*/
        done();
      });
  });
  it('should be able to retrieve a single subscription', function(done) {
    Subscription.findOne({name: 'Santiago Romero'}, function(err, subscription) {
      if(err) {
        console.log(err);
      } else {
        agent.get('/signup/' + subscription._id)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.name.should.equal('Santiago Romero');
            res.body.email.should.equal('santiagoromero98@ufl.edu');
            res.body._id.should.equal(subscription._id.toString());
            done();
          });
      }
    });
  });

  it('should be able to save a subscription', function(done) {
    var subscription = {
      name: 'Sara Gaya', 
      email: 'isaiah@ufl.edu' 
    };
    agent.post('/signup')
      .send(subscription)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Sara Gaya');
        res.body.email.should.equal('sgaya16@ufl.edu');
        id = res.body._id;
        done();
      });
  });



  it('should be able to update a subscription', function(done) {
    var updatedSubscription = {
      name: 'Sara Gaya', 
      email: 'saracgaya@gmail.com'
    };

    agent.put('/signup/' + id)
      .send(updatedSubscription)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Sara Gaya');
        res.body.email.should.equal('saracgaya@gmail.com');
        done();
      });
  });

  it('should be able to delete a subscription', function(done) {
    agent.delete('/signup/' + id)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);

        agent.get('/signup/' + id) 
          .expect(400)
          .end(function(err, res) {
            id = undefined;
            done();
          });
      })
  });

/*If this test fails because you haven't completed the  coordinates.server.controlelr.js file 
  use the filter feature in MongoDB Atlas to find and delete the entry
  {'code' : 'GMC'}
  This should resolve the issue. Although the test has failed our create function still 
  sends the listing to the database.

  You can comment the two coordinate tests until you have completed the code the 
  coordinates.server.controlelr.js file 
*/

/*
  it('should be able to save a listing with coordinates', function(done) {
    var listing2 = {
      code: 'GMC', 
      name: 'Dr. Gardner-McCunes Office', 
      address: '432 Newell Dr, Gainesville, FL 32611'
    };
    agent.post('/api/listings')
      .send(listing2)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Dr. Gardner-McCunes Office');
        res.body.code.should.equal('GMC');
        res.body.address.should.equal('432 Newell Dr, Gainesville, FL 32611');
        res.body.coordinates.latitude.should.equal(28.75054);
        res.body.coordinates.longitude.should.equal(-82.5001);
        id2 = res.body._id;
        done();
      });
  });
  
  it('should be able to delete the listing with coordinates', function(done) {
    agent.delete('/api/listings/' + id2)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        agent.get('/api/listings/' + id2) 
          .expect(400)
          .end(function(err, res) {
            id = undefined;
            done();
          });
      })
  });
  */
 
  after(function(done) {
    if(id) {
      Subscription.deleteOne({_id: id}, function(err){
        if(err) throw err;
        next();
      }); 
    }if(id2) {
      Subscription.deleteOne({_id: id2}, function(err){
        if(err) throw err;
        done();
      });
    }else done();
  });

  //closes mongoDB connection 
  after(function(done) {
    mongoose.connection.close();
    console.log(mongoose.connection);
    done();
  })
  
});
