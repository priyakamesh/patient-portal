
'use strict';

const { bookshelf } = require('../db/database');
const History = require('../models/history')

module.exports.getAllHistory = (req,res,next) => {
  History.getAllHistory()
  .then( (history) => {
    res.status(200).json({history});
  })
  .catch( (error) => {
    next(error);
  });
}

module.exports.getAllSocialHistory = (req,res,next) =>{
  History.getAllSocialHistory()
  .then((social_history) => {
    res.status(200).json({social_history})
  })
  .catch( (err) =>{
    next(err)
  })
}
module.exports.getAllFamilyHistory = (req,res,next) =>{
  History.getAllFamilyHistory()
  .then((family_history) => {
    res.status(200).json({family_history})
  })
  .catch( (err) =>{
    next(err)
  })
}
