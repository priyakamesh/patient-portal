'use strict';

const { bookshelf } = require('../db/database');
const Patient= require('../models/patient')
const Patient_allergy = require('../models/patient_allergy')
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
module.exports.getAllAllergy= ({params: {patient_id}},res,next) =>{
  console.log("patient_id",patient_id);
  Patient.forge({id:patient_id})
  .fetch({withRelated: ['allergy'],require: true})
  .then((patient_allergy) =>{
    res.status(200).json(patient_allergy)
  })
  .catch((err) =>{
    next(err);
  })
}
module.exports.getAllHistory= ({params: {patient_id}},res,next) =>{
  console.log("patient_id",patient_id);
  Patient.forge({id:patient_id})
  .fetch({withRelated: ['history'],require: true})
  .then((patient_history) =>{
    res.status(200).json(patient_history)
  })
  .catch((err) =>{
    next(err);
  })
}
module.exports.getAllDoctor= ({params: {patient_id}},res,next) =>{
  console.log("patient_id",patient_id);
  Patient.forge({id:patient_id})
  .fetch({withRelated: ['doctor'],require: true})
  .then((patient_doctor) =>{
    res.status(200).json(patient_doctor)
  })
  .catch((err) =>{
    next(err);
  })
}
