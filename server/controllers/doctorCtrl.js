
'use strict';

const { bookshelf } = require('../db/database');
const Doctor = require('../models/doctor')

module.exports.getAllDoctors = (req,res,next) => {
  Doctor.getAllDoctors()
  .then( (doctors) => {
    res.status(200).json({doctors});
  })
  .catch( (error) => {
    next(error);
  });
}
module.exports.addDoctor = ({body},res,next) =>{
  Doctor.forge(body)
  .save()
  .then(() => res.status(200).json({"msg": "Doctor Added Successfully"}))
  .catch((err) =>{ next(err)})
}
