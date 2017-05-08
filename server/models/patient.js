'use strict'

const { bookshelf } = require('../db/database')

const Patient = bookshelf.Model.extend({
  tableName: 'patients'
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
