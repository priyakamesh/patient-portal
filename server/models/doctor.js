'use strict'

const { bookshelf } = require('../db/database')

require('./patient')
require('./patient_doctor')
const Doctor = bookshelf.Model.extend({
  tableName: 'doctors',
   patient: function(){ return this.belongsToMany('Patient').through('Patient_doctor')}
},{
  getAllDoctors: function(){
    console.log("get all doctors in model")
    return this.forge()
    .fetchAll()
    .then((doctors) =>{
      return doctors
    })
    .catch( (err) =>{
      return err
    })
  },
  getDoctor: function (fullname) {
    return this.where({fullname:fullname})
    .fetchAll()
    .then((doctor) =>{
      console.log("doctor",doctor);
      return doctor
    })
    .catch((err) =>{
      return err
    })
  }
})

module.exports = bookshelf.model('Doctor',Doctor)
