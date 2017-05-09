'use strict'

const { bookshelf } = require('../db/database')

require('./patient')
require('./patient_doctor')
const Doctor = bookshelf.Model.extend({
  tableName: 'doctors',
   patient: function(){ return this.belongsToMany('Patient').through('Patient_doctor')}
},{
  getAllDoctors: function(){
    return this.forge()
    .fetchAll()
    .then((doctors) =>{
      return doctors
    })
    .catch( (err) =>{
      return err
    })
  }
})

module.exports = bookshelf.model('Doctor',Doctor)
