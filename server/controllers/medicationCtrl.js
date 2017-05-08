
'use strict';

const { bookshelf } = require('../db/database');
const Medication = require('../models/medication')

module.exports.getAllMedications = ({params:{id}},res,next)=>{
  Medication.getAllMedications(id)
  .then((medications) =>{
    res.status(200).json({medications})
  })
  .catch((err) =>{
    next(err)
  })
}

module.exports.getAllCurrentMedication = ({params:{id}}, res, next) =>{
  Medication.getAllMedications(id)
  .then(() => {
    Medication.getAllCurrentMedications(id)
    .then((current_medications) =>{
    res.status(200).json({current_medications})
  })
  .catch((err) =>{
    next(err)
  })
  })
  .catch((err) =>{
    next(err)
  })
}
