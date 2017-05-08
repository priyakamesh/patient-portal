'use strict';

const { bookshelf } = require('../db/database');
const Patient= require('../models/patient')

module.exports.getPatient = ({params:{id}},res,next)=>{
  Patient.getPatient(id)
  .then((patient) =>{
    res.status(200).json({patient});
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.addPatient = ({body},res,next) =>{
  Patient.forge(body)
  .save()
  .then(() => res.status(200).json({"msg": "Patient Added Successfully"}))
  .catch((err) =>{ next(err)})
}
module.exports.deletePatient = ({params:{id}},res,next) =>{
  Patient.deletePatient(id)
  .then(() => res.status(200).json({'msg': "Deleted Successfully"}))
  .catch((err) =>{ next(err)})
}
