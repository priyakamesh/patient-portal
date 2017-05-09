'use strict'

const { bookshelf } = require('../db/database')
require('./patient')

const Release = bookshelf.Model.extend({
  tableName: 'release_med_info',
  patient: function (){
    return this.belongsTo(Patient)
  }
},{
  getReleaseperson: function(id){
    return this.where({patient_id:id})
    .fetchAll()
    .then((release) =>{
      return release
    })
    .catch((err) =>{
      return err
    })
  }
})

module.exports = bookshelf.model('Release', Release)
