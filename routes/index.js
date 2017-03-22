var express = require('express');
var router = express.Router();
var data = require('../data/schedule.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Conference App', data: data });
});

module.exports = router;
