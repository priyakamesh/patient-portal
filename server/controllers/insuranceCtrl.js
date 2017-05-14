'use strict';

const { bookshelf } = require('../db/database');
const Insurance = require('../models/insurance')

module.exports.getAllInsurance = (req,res,next)=>{
  Insurance.getAllInsurance()
  .then((insurance) =>{
    res.status(200).json({insurance});
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.getAllPrimaryInsurance = (req,res,next)=>{
  Insurance.getAllPrimaryInsurance()
  .then((primary_insurance) =>{
    res.status(200).json({primary_insurance});
  })
  .catch((err) =>{
    next(err)
  })
}
module.exports.getAllSecondaryInsurance = (req,res,next)=>{
  Insurance.getAllSecondaryInsurance()
  .then((Secondary_insurance) =>{
    res.status(200).json({Secondary_insurance});
  })
  .catch((err) =>{
    next(err)
  })
}

module.exports.getPatientInsurance = ({params: {id}}, res, next) =>{
  Insurance.getPatientInsurance(id)
  .then((insurance) =>{
    res.status(200).json({insurance})
  })
  .catch((err) => next(err))
}
module.exports.addInsurance = ({params:{id},body},res,next) =>{
  Insurance.forge(body)
  .save()
  .then(() =>{
    res.status(200).json({"msg":"success"})
  })
  .catch((err) =>{ next(err)})
}
module.exports.deletePatientInsurance = ({params:{id}}, res, next) =>{
  Insurance.where({id:id})
  .destroy()
  .then(() =>{
    res.status(200).json({"msg": "deleted"})
  })
  .catch((err) => next(err))
}
