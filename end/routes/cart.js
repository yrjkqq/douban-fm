var express = require('express');
var router = express.Router();

// 购物车
router.get('/product/count', function(req, res, next) {
  res.send({
    count: 0
  });
});

module.exports = router;
