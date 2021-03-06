'use strict'

const { bookshelf } = require('../db/database')
const { compare } = require('bcryptjs');

require('./patient_allergy')
require('./allergy')
require('./history')
require('./patient_doctor')
require('./doctor')
const Patient = bookshelf.Model.extend({
  tableName: 'patients',
  allergy: function() { return this.belongsToMany('Allergy').through('Patient_allergy')},
  history: function() {return this.belongsToMany('History').through('Patient_history')},
  doctor: function() {return this.belongsToMany('Doctor').through('Patient_doctor')},
  bcrypt: { field: 'password'},
  comparePass: function (passwordStr) {
    console.log("password String from user", passwordStr );
    console.log("user", this.attributes);
    return compare(passwordStr, this.attributes.password)
  }
},{
  findOneByEmail: function (email) {
    return this.forge({email})
    .fetch()
    .then( (user) => {
      console.log("Got User", user.get('email'));
      return user;
    })
    .catch( () => {
      console.log("yup, this happens when no email");
      return (null)
    });
  },
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
  },
  getPatientId: function(email){
    return this.where({email:email})
    .fetch()
    .then((patient) =>{
      return patient
    })
    .catch((err) =>{
      return err
    })
  },
  updatePatient: function(body,id){
    return this.where({id:id})
    .save(body,{patch:true})
    .then(() =>{
      return {"msg":"successfull"}
    })
    .catch((err) =>{
      return err
    })
  }
})

module.exports = bookshelf.model('Patient',Patient)
