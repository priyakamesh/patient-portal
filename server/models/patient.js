'use strict'

const { bookshelf } = require('../db/database')

require('./patient_allergy')
require('./allergy')
require('./history')
const Patient = bookshelf.Model.extend({
  tableName: 'patients',
  allergy: function() { return this.belongsToMany('Allergy').through('Patient_allergy')},
  history: function() {return this.belongsToMany('History').through('Patient_history')}
},{
  getPatient: function (id){
    return this.where({id:id})
    .fetch()
    .then((patient) =>{
      return patient
    })
    .catch((err) =>{
      return err
    })
  },
  deletePatient: function(id){
    return this.where({id:id})
    .destroy()
    .then(() =>{
      return {"msg": "Deleted"}
    })
    .catch((err) =>{
      return err
    })
  }
})

module.exports = bookshelf.model('Patient',Patient)
