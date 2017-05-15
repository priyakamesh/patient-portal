
'use strict';

const { bookshelf } = require('../db/database');
const Doctor = require('../models/doctor')

module.exports.getAllDoctors = (req,res,next) => {
  console.log("get all docs from ctrl")
  Doctor.getAllDoctors()
  .then( (doctors) => {
    res.status(200).json({doctors});
  })
  .catch( (error) => {
    next(error);
  });
}

module.exports.getDoctor = ({params: {fullname}}, res, next) =>{
  var doctorName = fullname.replace("%20", " ")
  console.log("doctorName",doctorName);
  Doctor.getDoctor(doctorName)
  .then((doctor) =>{
    res.status(200).json({doctor});
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.addDoctor = ({body},res,next) =>{
  Doctor.forge(body)
  .save()
  .then(() => res.status(200).json({"msg": "Doctor Added Successfully"}))
  .catch((err) =>{ next(err)})
}
