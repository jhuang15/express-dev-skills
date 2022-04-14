var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware is a function with req, res & optionally next as parameters
// app.use([starts with path], <middleware fn>, [<middleware fn>])


app.use(function(req, res, next) {
  res.locals.time = new Date();
  next();
});

app.use(function(req, res, next) {
  console.log(res.locals.time);
  next();
}, function(req, res, next) {
  console.log('2nd Middleware')
  next();
});

// provides logging:  logs out the request
app.use(logger('dev'));
// processes the body of the request if it contains JSON data
// and adds the data to req.body
app.use(express.json());
// processes the body of the request if it contains form data
// and adds the data to req.body
app.use(express.urlencoded({ extended: false }));
// processes cookies and adds them to req.cookies
app.use(cookieParser());
// serves static assets and ends the request by responding
// res.sendFile
app.use(express.static(path.join(__dirname, 'public')));

// methodOverride changes the method from POST to ???
app.use(methodOverride('_method'));

// Yes, our Express router objects are middleware,
// however, they end the request by calling res.render or res.redirect
app.use('/', indexRouter);
// All routes starts with /todos
app.use('/skills', skillsRouter);

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
