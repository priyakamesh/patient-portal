'use strict'

const { bookshelf } = require('../db/database')
require('./history_type')
require('./patient')
const History = bookshelf.Model.extend({
  tableName: 'history',
  history_type: function (){
    return this.belongsTo(History_Type)
  },
  patient: function() {return this.belongsToMany('Patient').through('Patient_history')}
},{
  getAllHistory: function(){
    return this.forge()
    .fetchAll()
    .then((history) =>{
      return history
    })
    .catch( (err) =>{
      return err
    })
  },
  getAllSocialHistory: function(){
    return this.where({history_type_id:1})
    .fetchAll()
    .then((social_history) => {
      return social_history
    })
    .catch((err) =>{
      return err
    })
  },
  getAllFamilyHistory: function(){
    return this.where({history_type_id:2})
    .fetchAll()
    .then((family_history) => {
      return family_history
    })
    .catch((err) =>{
      return err
    })
  }
})

module.exports = bookshelf.model('History', History)
