'use strict'

const { bookshelf } = require('../db/database')

const Doctor = bookshelf.Model.extend({
  tableName: 'doctors'
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
