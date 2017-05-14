'use strict';

const { bookshelf } = require('../db/database');
const Patient_Doctor = require('../models/patient_doctor')

module.exports.getId = ({params:{id}},res,next) =>{
  Patient_Doctor.getAllDoctors(id)
  .then((rows) =>{
    return res.status(200).json({rows})
  })
  .catch((err) => next(err))
}

module.exports.addPatientDoctor = ({params: {id, doctor_id}}, res, next) =>{
  Patient_Doctor.forge({patient_id:id, doctor_id:doctor_id})
  .save()
  .then((data) =>{
    return res.json({"msg": "saved"})
  })
  .catch((err) => next(err))
}

module.exports.deletePatientDoctor = ({params: {id,doctor_id}}, res, next) =>{
  Patient_Doctor.where({patient_id: id, doctor_id:doctor_id})
  .destroy()
  .then((data) =>{
    return res.json({"msg" :"deleted"})
  })
  .catch((err) => next(err))
}
