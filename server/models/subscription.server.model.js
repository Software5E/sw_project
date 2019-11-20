//mongoDB schema for newsletter subscription signup


var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var SubscriptionSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
    
});

// Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
SubscriptionSchema.pre('save', function(next) {
    //gets current date
    var currentDate = new Date();
  
    //change updated_at field to current date
    this.updated_at = currentDate;
  
    //if created_at doesn't exist, add date to that field
    if (!this.created_at) {
      this.created_at = currentDate;
    }
    next();
  });

var Subscription = mongoose.model('Subscription', SubscriptionSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Subscription;