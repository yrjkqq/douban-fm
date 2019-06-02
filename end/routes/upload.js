var express = require('express');
var router = express.Router();

// 用户资料
router.post('/uploadFile', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      pic: '/img/icons/apple-touch-icon.png',
      path: '/img/icons/apple-touch-icon.png'
    }
  });
});

module.exports = router;
