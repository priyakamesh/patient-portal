'use strict'

const { bookshelf } = require('../db/database')
require('./allergy_type')
const Allergy = bookshelf.Model.extend({
  tableName: 'allergy',
  allergy_type: function (){
    return this.belongsTo(Allergy_Type)
  }
},{
  getAllAllergy: function(){
    return this.forge()
    .fetchAll()
    .then((allergy) =>{
      return allergy
    })
    .catch( (err) =>{
      return err
    })
  },
  getAllDrugAllergy: function(){
    return this.where({allergy_type_id:2})
    .fetchAll()
    .then((drug_allergy) =>{
      return drug_allergy
    })
    .catch( (err) =>{
      return err
    })
  },
  getAllFoodAllergy: function(){
    return this.where({allergy_type_id:1})
    .fetchAll()
    .then((food_allergy) =>{
      return food_allergy
    })
    .catch( (err) =>{
      return err
    })
  }
})

module.exports = bookshelf.model('Allergy', Allergy)
