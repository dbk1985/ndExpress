var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('news', { title: '这是一个新闻的页面' });
});

module.exports = router;