const medication = require('../../medication')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('medication').del()
    .then(function () {
      // Inserts seed entries
      return knex('medication').insert(medication);
    });
};
