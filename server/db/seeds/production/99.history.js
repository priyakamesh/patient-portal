const history = require('../history')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('history').del()
    .then(function () {
      // Inserts seed entries
      return knex('history').insert(history);
    });
};
