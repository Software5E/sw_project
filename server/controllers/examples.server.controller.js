var Example = require('../models/examples.server.model.js')    

exports.hello = function(req, res) {
    res.sendFile('../../')
};