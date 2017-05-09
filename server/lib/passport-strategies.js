'use strict';

const passport = require('passport');
const { Strategy } = require('passport-local');
const { knex } = require('../db/database');

const Patient = require('../models/patient');

passport.serializeUser((patient, done) => done(null, user.id));

passport.deserializeUser( (id, done) => {
  knex('patient').where({id}).first()
  .then( (user) => done(null, user) )
  .catch( (err) => done(err, null) )
});

const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, passwordStr, done) => {
    Patient.findOneByEmail(email)
    .then( (user) => {
      if (user) {
        return Promise.all([
            user,
            user.comparePass(passwordStr)
          ])
      }
      done( null, null, { msg: 'Email does not exist in our system'})
    })
    .then( ([user, matches]) => {
      if (matches) {
        done(null, user, {msg: 'Successfuly logged in'})
      } else {
        done( null, null, {msg: 'Password does not match'})
      }
    })
    .catch(done)
})

passport.use(localStrategy)
