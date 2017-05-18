// 'use strict';

// const passport = require('passport');
// const { Strategy } = require('passport-local');
// const { knex } = require('../db/database');

// const Patient = require('../models/patient');

// passport.serializeUser((patient, done) => done(null, patient.id));

// passport.deserializeUser( (id, done) => {
//   knex('patient').where({id}).first()
//   .then( (patient) => done(null, patient) )
//   .catch( (err) => done(err, null) )
// });

// const localStrategy = new Strategy({
//     usernameField: 'email',
//     passwordField: 'password'
//   },
//   (email, passwordStr, done) => {
//     Patient.findOneByEmail(email)
//     .then( (patient) => {
//       if (patient) {
//         return Promise.all([
//             patient,
//             patient.comparePass(passwordStr)
//           ])
//       }
//       done( null, null, { msg: 'Email does not exist in our system'})
//     })
//     .then( ([patient, matches]) => {
//       if (matches) {
//         done(null, patient, {msg: 'Successfuly logged in'})
//       } else {
//         done( null, null, {msg: 'Password does not match'})
//       }
//     })
//     .catch(done)
// })

// passport.use(localStrategy)
