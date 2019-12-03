/*Note about model test
  This is not actually testing how content gets saved in your database or not. 
  It is testing that you model works. If you deleted your database this would still work. 
  If you ran this with the code provided in the assignment it would still pass most tests because 
  you have empty constructors.

  Note: It may actually run initially but save garbage in your database that will then cause
  other issues later. So delete your database so 
  you can start clean once you complete the  listings.server.model.js file 


  */

 var should = require('should'), 
 mongoose = require('mongoose'), 
 Subscription = require('../models/subscription.server.model'), 
 config = require('../config/config');

var subscription, id;

subscription =  {
name: "Sara Gaya", 
email: "i@ufl.edu"
}

describe('Subscription Schema Unit Tests', function() {

before(function(done) {
 mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
 mongoose.set('useCreateIndex', true);
 mongoose.set('useFindAndModify', false);
 done();
});

describe('Saving to database', function() {
 /*
   Mocha's default timeout for tests is 2000ms. To ensure that the tests do not fail 
   prematurely, we can increase the timeout setting with the method this.timeout()
  */
 this.timeout(10000);

//  it('saves properly when email and name provided', function(done){
//    new Subscription({
//      name: subscription.name, 
//      email: subscription.email
//    }).save(function(err, subscription){
//      should.not.exist(err);
//      id = subscription._id;
//      done();
//    });
//  });

//  it('saves properly when all properties provided', function(done){
//    new Subscription(subscription).save(function(err, subscription){
//      should.not.exist(err);
//      id = subscription._id;
//      done();
//    });
//  });

 it('throws an error when email not provided', function(done){
   new Subscription({
     name: subscription.name
   }).save(function(err){
     should.exist(err);
     done();
   })
 });

 it('throws an error when name not provided', function(done){
   new Subscription({
     email: subscription.email
   }).save(function(err){
     should.exist(err);
     done();
   })
 });

});
/*
afterEach(function(done) {
 if(id) {
   Subscription.deleteOne({ _id: id }).exec(function() {
     id = null;
     done();
   });
 } else {
   done();
 }
});
*/
//mongoDB connection closed 
after(function(done) {
  mongoose.connection.close();
  console.log(mongoose.connection);
  done();
})

});