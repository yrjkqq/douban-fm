var express = require('express');
var router = express.Router();

// 消息
router.get('/count', function(req, res, next) {
  res.send({
    count: 10
  });
});

module.exports = router;
