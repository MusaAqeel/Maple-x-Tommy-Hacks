var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://uofthacks:gq8hUmx5yt6OHGov@cluster0-hzrwe.mongodb.net/uofthacks_viii?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', function(callback) {
    console.log('connection succeeded');
})

var indexRouter = require('./routes/index');
var pullRouter = require('./routes/pull');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use('/pull', pullRouter);
app.use('/', indexRouter);

app.post('/email_sign_up', function(req, res) {
    var data = {
        'email': req.body.email
    };
    db.collection('emails').insertOne(data, function(err, collection) {
        if (err) {
            res.redirect('/#error');
            throw err;
        }
        console.log('Database update successful');
    });

    return res.redirect('/#success');
})

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
