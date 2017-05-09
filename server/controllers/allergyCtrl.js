
'use strict';

const { bookshelf } = require('../db/database');
const Allergy = require('../models/allergy')
const Patient_allergy = require('../models/patient_allergy')

module.exports.getAllAllergy = (req,res,next) => {
  Allergy.getAllAllergy()
  .then( (allergy) => {
    res.status(200).json({allergy});
  })
  .catch( (error) => {
    next(error);
  });
}
module.exports.getAllDrugAllergy = (req,res,next) =>{
  Allergy.getAllDrugAllergy()
  .then((drug_allergy) => {
    res.status(200).json({drug_allergy})
  })
  .catch( (err) =>{
    next(err)
  })
}
module.exports.getAllFoodAllergy = (req,res,next) =>{
  Allergy.getAllFoodAllergy()
  .then((food_allergy) => {
    res.status(200).json({food_allergy})
  })
  .catch( (err) =>{
    next(err)
  })
}
module.exports.getFoodAllergy= ({params: {id}},res,next) =>{
  Patient_allergy.getFoodAllergy(id)
  .then(() =>{
    Allergy.getFoodAllergy()
    .then((food_allergy) =>{
      res.status(200).json({food_allergy})
    })
    .catch((err) =>{
      next(err)
    })
  })
  .catch((err) =>{
    next(err)
  })
}
