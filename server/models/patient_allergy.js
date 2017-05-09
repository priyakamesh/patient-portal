'use strict'

const { bookshelf } = require('../db/database')
require('./patient')
require('./allergy')

const Patient_allergy = bookshelf.Model.extend({
  tableName: 'patient_allergy'
},{
  getFoodAllergy: function(id){
    return this.where({patient_id: id})
    .fetchAll()
    .then((food_allergy) =>{
      return food_allergy
    })
    .catch((err) =>{
      return err
    })
  }
})

module.exports = bookshelf.model('Patient_allergy', Patient_allergy)
