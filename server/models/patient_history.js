'use strict'

const { bookshelf } = require('../db/database')
require('./patient')
require('./history')

const Patient_history = bookshelf.Model.extend({
  tableName: 'patient_history'
})

module.exports = bookshelf.model('Patient_history', Patient_history)
