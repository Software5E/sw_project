var express = require('express'), 
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//var examples = require('../controllers/examples.server.controller.js'); 
//mongoose.connect('mongodb+srv://FaceR-Admin:Faceradtmp12345@subscriptiondb-uxxkh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });    
//var url = 'mongodb://localhost:27017/user-data' //<------ after '/' put name of our database
mongoose.connect('mongodb+srv://FaceR-Admin:Faceradtmp12345@subscriptiondb-uxxkh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
var SubscriptionSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true }
});
var User = mongoose.model("User", SubscriptionSchema );



app.post('/insert', (req, res) => {
  var myData = new User(req.body);
  myData.save()
  .then(item => {
    res.send("Successfully subscribed to FaceR emailing list. Thank you");
  })
  .catch(err => {
    res.status(400).send("Unable to save to database");
  });
  });


module.exports = router;