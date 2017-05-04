var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')
var routes = require('./routes/');

var app = express();
app.use(cors())
// This 'if' statement prevents application log messages from
// displaying in the stdout when the tests are run
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
// require('dotenv').config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/', routes)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if(app.get('env') === 'development' || app.get('env') === 'test') {
  app.use((err,req,res,next) => {
    console.log("error", err)
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

//default to production
app.use((err,req,res,next) => {
    console.log("error", err)
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: {}
    })
  })

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} in this super keen env: ${process.env.NODE_ENV}`);
});

module.exports = app;
