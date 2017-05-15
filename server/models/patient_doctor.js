'use strict'

const { bookshelf } = require('../db/database')
require('./patient')
require('./doctor')

const Patient_doctor = bookshelf.Model.extend({
  tableName: 'patient_doctor',
  patient: function(){ return this.belongsTo('Patient')},
  doctor: function(){ return this.belongsTo('Doctor')}
},{
  getAllDoctor: function(id){
    return this.where({patient_id: id})
    .fetchAll()
    .then((all_doctor) =>{
      return all_doctor
    })
    .catch((err) =>{
      return err
    })
  },

  addMany: function(rows) {
    return this.collection(rows).invokeThen('save')
  }
})

module.exports = bookshelf.model('Patient_doctor', Patient_doctor)
