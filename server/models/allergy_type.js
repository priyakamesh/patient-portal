'use strict'

const { bookshelf } = require('../db/database')
require('./allergy')
const Allergy_Type = bookshelf.Model.extend({
  tableName: 'allergy_type'
})

module.exports = bookshelf.model('Allergy_Type',Allergy_Type)
