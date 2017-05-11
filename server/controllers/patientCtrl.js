'use strict';

const passport = require('passport');
const { bookshelf } = require('../db/database');
const Patient= require('../models/patient')
const Patient_allergy = require('../models/patient_allergy')
const Patient_history = require('../models/patient_history')
module.exports.checkPatient = (req,res,next) =>{
  passport.authenticate('local', (err,patient,msg) =>{
    if(err) return next(err)
    if(!patient) return res.json({"msg": "Email not found"})
      req.login(patient, (err) => {
      if (err) return next(err)
      res.json({patient})
    })
  })(req, res, next)
}

module.exports.getPatient = ({params:{id}},res,next)=>{
  Patient.getPatient(id)
  .then((patient) =>{
    res.status(200).json({patient});
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.getPatientId = ({params: {email}},res,next) =>{
  Patient.getPatientId(email)
  .then((patient) =>{
    res.status(200).json({patient})
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.addPatient = ({body: {email, password, confirmation}},res,next) =>{
  if(password === confirmation)
    Patient.findOneByEmail(email)
    .then((patient) =>{
      if(patient) return res.json({"msg": "Email is already registered"})
      return Patient.forge({email,password})
      .save()
      .then(() => {
        Patient.getPatientId(email)
        .then((patient) =>{
          res.status(200).json({patient})})
        .catch((err) =>{ next(err)})
        })

      .catch((err) =>{ next(err)})
  })
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

module.exports.updatePatient = ({params:{id},body},res,next) =>{
  console.log("id",id);
  console.log("body",body);

  Patient.updatePatient(body,id)
  .then(() =>{
    res.status(200).json({"msg":"successfull"})
  })
  .catch((err) =>{ next(err)})
}
// logs out user and redirects to login page
module.exports.destroy = (req, res, next) => {

  res.json({"msg": "Logged out successfully"})
}

module.exports.addMany = ({params:{id},body},res,next) =>{
  console.log("body",body);
  let allergy = body.allergy_id
  console.log("allergy",allergy);
  let patient_id = id
  let pairs= []
  allergy.forEach(allergy =>{
    pairs.push({patient_id:patient_id,allergy_id:allergy})
  })
  Patient_allergy.addMany(pairs)
  .then(() =>{
    res.status(200).json({"msg":"allergy added successfully"})
  })
  .catch((err) =>{ next(err)})
}
module.exports.addManyHistory = ({params:{id},body},res,next) =>{
  console.log("body",body);
  let history = body.history_id
  console.log("history",history);
  let patient_id = id
  let pairs= []
  history.forEach(history =>{
    pairs.push({patient_id:patient_id,history_id:history})
  })
  Patient_history.addMany(pairs)
  .then(() =>{
    res.status(200).json({"msg":"history added successfully"})
  })
  .catch((err) =>{ next(err)})
}
