var express = require('express');
var router = express.Router();

// 购物车
router.post('/login', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      token: 'QQ3HzYNmnBNOfqCpilq96W+hE2SprrX3+xf40goeyrdz0PzYZAoeNvamDlQ3JP9SZy0vvFk5KuIU6/HzPzAWrnN9olyLYL1G+kIRa1ynMkvBlBP4S4YdKSsBDocXxqLYeld+lVsCEtoNwAP89Uo6ihzOy6HjoWAzz7F6YxjjVn8=',
      user_info: {
        user_name: 'zhangyx00',
        is_through: 1
      }
    }
  });
});

module.exports = router;
