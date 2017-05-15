'use strict'

const { bookshelf } = require('../db/database')
require('./insurance_type')
// require('./patient')
const Insurance = bookshelf.Model.extend({
  tableName: 'insurance',
  insurance_type: function (){
    return this.belongsTo(Insurance_Type)
  }
},{
  getAllInsurance: function(){
    return this.forge()
    .fetchAll()
    .then((insurance) =>{
      return insurance
    })
    .catch((err) =>{
      return err
    })
  },
  getAllPrimaryInsurance: function(){
    return this.where({insurance_type_id:1})
    .fetchAll()
    .then((primary_insurance) =>{
      return primary_insurance
    })
    .catch((err) =>{
      return err
    })
  },
  getAllSecondaryInsurance: function(){
    return this.where({insurance_type_id:2})
    .fetchAll()
    .then((secondary_insurance) =>{
      return secondary_insurance
    })
    .catch((err) =>{
      return err
    })
  },
  getPatientInsurance: function(id){
    return this.where({patient_id:id})
    .fetchAll()
    .then((getInsurance) =>{
      return getInsurance
    })
    .catch((err) =>{
      return err
    })
  }
})


module.exports = bookshelf.model('Insurance',Insurance)
