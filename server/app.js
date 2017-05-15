var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const cookieParser = require('cookie-parser');
const { knex } = require('./db/database');
var routes = require('./routes/');
var swaggerJSDoc = require('swagger-jsdoc');
var app = express();

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Patient Portal API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);
app.set('view engine', 'pug');
//middlewaes
app.use(cors())
app.use(cookieParser('secretpatient'));
app.use(session({cookie: {maxAge: 600000}, secret: 'secretpatient', resave: true, saveUninitialized: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'patientsupersecretkey'
}));
app.use(express.static(path.join(__dirname, 'public')));
require('./lib/passport-strategies')
app.use(passport.initialize())
app.use(passport.session())

// This 'if' statement prevents application log messages from
// displaying in the stdout when the tests are run
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
// require('dotenv').config()
app.use(bodyParser.json());


app.use('/api/v1/', routes)
// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
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
