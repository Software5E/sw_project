var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var SubscriptionSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
    
});

var Subscription = mongoose.model('Subscription', SubscriptionSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Subscription;