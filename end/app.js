var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api');
var cartRouter = require('./routes/cart');
var msgRouter = require('./routes/msg');
var goodsRouter = require('./routes/goods');
var platformRouter = require('./routes/platform');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 各模块单独划分路由
const apiPrefix = '/index.php/web';
app.use(apiPrefix + '/cart', cartRouter);
app.use(apiPrefix + '/msg', msgRouter);
app.use(apiPrefix + '/goods', goodsRouter);
app.use(apiPrefix + '/Platform', platformRouter);
app.use(apiPrefix + '/login', loginRouter);

app.use(apiPrefix + '/', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
