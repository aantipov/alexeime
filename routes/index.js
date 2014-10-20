var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

// 301 redirect for old pages.
router.get('*', function (req, res, next) {
  res.redirect(301, '/');
});

module.exports = router;
