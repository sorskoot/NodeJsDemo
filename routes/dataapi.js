var express = require('express');
var router = express.Router();

router.get('/speakers/:name', function(req, res, next) {
  res.json({speaker: req.params.name});
});

module.exports = router;