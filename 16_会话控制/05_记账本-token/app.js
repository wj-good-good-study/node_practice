var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoStore = require('connect-mongo')
const session = require('express-session')
const db = require('./config/config')

var indexRouter = require('./routes/web/index');
const regRouter = require('./routes/web/auth');
const accountRouter = require('./routes/api/account');
const authApiRouter = require('./routes/api/auth');

var app = express();

// app.use(session({
//   name: 'sessionid', // cookie的name
//   secret: 'salt', // 密钥，提高加密等级，加盐
//   saveUninitialized: false, // 是否为每个请求都创建新的cookie来存储session的id
//   resave: true, // 重新保存，每次请求重新保存session，更新session
//   store: MongoStore.create({
//       mongoUrl: `mongodb://${db.DBHOST}:${db.DBPORT}/${db.DBNAME}`, // 数据库连接配置
//       ttl: 1000 * 60 * 60 *24 *7
//   }),
//   cookie: {
//       httpOnly: true,
//       maxAge: 1000 * 60 * 60 *24 *7 // 设置session过期时间，数据库中也会过期
//   }
// }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use('/', regRouter);
app.use('/api',accountRouter)
app.use('/api',authApiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 404
  res.render('404')
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
