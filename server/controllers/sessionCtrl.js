'use strict'

const passport = require('passport');
module.exports.show = (req, res) =>
  res.render('login', {page: "Login"});

module.exports.create = (req, res, next) =>
  passport.authenticate('local', (err, user, msg) => {
    if (err) return next(err)
    if (!user) return res.render('login', {page: "Login", msg} )

    req.login(user, (err) => {
      if (err) return next(err)
      res.redirect('/')
    })
  })(req, res, next)
