'use strict'

const { bookshelf } = require('../db/database')
require('./medication_type')
const Medication = bookshelf.Model.extend({
  tableName: 'medication',
  medication_type:function (){
    return this.belongsTo(Medication_Type)
  }
},{
  getAllMedications: function(id){
    return this.where({patient_id:id})
    .fetchAll()
    .then((medications) =>{
      return medications
    })
    .catch( (err) =>{
      return err
    })
  },
  getAllCurrentMedications: function(id) {
    return this.where({patient_id:id,medication_type_id:1})
    .fetchAll()
    .then((current_medications) =>{
      return current_medications
    })
    .catch((err) =>{
      return err
    })
  },
  getAllDisMedications: function(id) {
    return this.where({patient_id:id,medication_type_id:2})
    .fetchAll()
    .then((dis_medications) =>{
      return dis_medications
    })
    .catch((err) =>{
      return err
    })
  },
  deleteCurrentMedication: function(id,currentmedication_id) {
    return this.where({patient_id:id,id:currentmedication_id})
    .destroy()
    .then(() =>{
      return {"msg" :"deleted"}
    })
  },
  deleteDisMedication: function(id,dismedication_id) {
    console.log("id,dismedication_id",id,dismedication_id);
    return this.where({patient_id:id,id:dismedication_id})
    .destroy()
    .then(() =>{
      return {"msg" :"deleted"}
    })
  }
})

module.exports = bookshelf.model('Medication',Medication)
