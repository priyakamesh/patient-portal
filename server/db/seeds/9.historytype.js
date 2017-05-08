const historytype = require('../history_type')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('history_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('history_type').insert(historytype);
    });
};
