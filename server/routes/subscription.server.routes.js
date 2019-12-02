var subscriptions = require('../controllers/subscription.server.controller.js'), 
    express = require('express'), 
    router = express.Router()

    /*
router.route('/')
  .get(examples.hello);
  */

  router.route('/signup')
  .post(subscriptions.create);

  router.route('/')
  .get(subscriptions.list)
  .post(subscriptions.create);
  
router.route('/:subscriptionId')
  .get(subscriptions.read)
  .put(subscriptions.update)
  .delete(subscriptions.delete);


router.param('subscriptionId', subscriptions.subscriptionById);
  
module.exports = router;