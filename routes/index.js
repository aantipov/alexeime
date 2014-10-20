var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

// 301 redirect for old pages.
router.get('*', function (req, res, next) {
  switch (req.url) {
    case '/portfolio':
    case '/portfolio/vgexpress':
    case '/portfolio/callcenter':
    case '/portfolio/shevyakovacom':
    case '/portfolio/calcwardrobe':
    case '/oplata':
    case '/demo/calc':
    case '/oplata/successpay':
    case '/oplata/failpay':
      res.redirect(301, '/');
      break;
    default:
      next();
  }
});

module.exports = router;
