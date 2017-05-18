const allergy = require('../../allergy')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('allergy').del()
    .then(function () {
      // Inserts seed entries
      return knex('allergy').insert(allergy);
    });
};
