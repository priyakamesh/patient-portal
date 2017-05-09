'use strict'

const { bookshelf } = require('../db/database')
require('./insurance')
const Insurance_Type = bookshelf.Model.extend({
  tableName: 'insurance_type'
})

module.exports = bookshelf.model('Insurance_Type',Insurance_Type)
