'use strict'

const { bookshelf } = require('../db/database')
require('./medication')
const Medication_Type = bookshelf.Model.extend({
  tableName: 'medication_type'
})

module.exports = bookshelf.model('Medication_Type',Medication_Type)
