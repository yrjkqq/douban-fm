var Mock = require('mockjs');
var express = require('express');
var router = express.Router();

/* GET artists list. */
router.get('/artists', function (req, res, next) {
    res.send([
        {'id': '0001', 'name': 'jay01'},
        {'id': '0002', 'name': 'maroon'},
    ]);
});

// test mock
router.get('/artists-mock', function(req, res, next) {
    var data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    });
    return res.json(data);
})

module.exports = router;
