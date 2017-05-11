// 'use strict';

// const { bookshelf } = require('../db/database');
// const Patient_allergy = require('../models/patient_allergy')

// module.exports.getFoodAllergy = ({params:{patient_id}},res,next) =>{
//   Patient_allergy.getFoodAllergy(patient_id)
//   .then((food_allergy) =>{
//     res.status(200).json({food_allergy})
//   })
//   .catch((err) =>{
//     next(err)
//   })
// }
// module.exports.getDrugAllergy = ({params:{patient_id}},res,next) =>{
//   Patient_allergy.getDrugAllergy(patient_id)
//   .then((drug_allergy) =>{
//     res.status(200).json({drug_allergy})
//   })
//   .catch((err) =>{
//     next(err)
//   })
// }
