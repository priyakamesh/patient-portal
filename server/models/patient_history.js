'use strict'

const { bookshelf } = require('../db/database')
require('./patient')
require('./history')

const Patient_history = bookshelf.Model.extend({
  tableName: 'patient_history',
  patient: function(){ return this.belongsTo('Patient')},
  history: function(){ return this.belongsTo('History')}
},{getAllHistory: function(id){
    return this.where({patient_id: id})
    .fetchAll()
    .then((all_history) =>{
      return all_history
    })
    .catch((err) =>{
      return err
    })
  },
  addMany: function(rows) {
    return this.collection(rows).invokeThen('save')
  }
  // ,
  // deleteMany: function(rows) {
  //   return this.collection(rows).invokeThen('destroy')
  // }
})

module.exports = bookshelf.model('Patient_history', Patient_history)
