'use strict'

const { bookshelf } = require('../db/database')
require('./patient')
require('./allergy')

const Patient_allergy = bookshelf.Model.extend({
  tableName: 'patient_allergy',
  patient: function(){ return this.belongsTo('Patient')},
  allergy: function(){ return this.belongsTo('Allergy')}
},{
  getAllAllergy: function(id){
    return this.where({patient_id: id})
    .fetchAll()
    .then((all_allergy) =>{
      return all_allergy
    })
    .catch((err) =>{
      return err
    })
  },

  addMany: function(rows) {
    return this.collection(rows).invokeThen('save')
  }
})

module.exports = bookshelf.model('Patient_allergy', Patient_allergy)
