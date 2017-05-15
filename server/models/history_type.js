'use strict'

const { bookshelf } = require('../db/database')
require('./history')
const History_Type = bookshelf.Model.extend({
  tableName: 'history_type'
})

module.exports = bookshelf.model('History_Type',History_Type)
