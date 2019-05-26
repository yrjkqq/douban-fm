var express = require('express');
var router = express.Router();

// 购物车
router.post('/getPlatformPublicKey', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      public_key: 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDNkFhTHlFWHVDeHNuVjFNRGhnOGsrdWZJLwpWU1ZyNVViRzk3bFBoYzh4RWhWOGtpNWhZdkRJN3lMMzYzN0kvSno2UkYrbWlYc1JkRkZpQmtPV044aUdDWXZoCnREVlY5cW13QlZ1WGNlai9lZ2IweWh2endnSTRnMm5LRlB0eVN3SUVvdW1BRnNSSVhKalhBSS9BcXY2WGRIcXIKZjhoUkx5K2ZnWWhTd25kMVpRSURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ=='
    }
  });
});

module.exports = router;
