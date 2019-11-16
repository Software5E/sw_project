var subscriptions = require('../controllers/subscription.server.controller.js'), 
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(examples.hello);
  

router.param('subscriptionId', subscriptions.subscriptionById);
  
module.exports = router;