const allergy_type = require('../../allergy_type')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(' allergy_type').del()
    .then(function () {
      // Inserts seed entries
      return knex(' allergy_type').insert (allergy_type);
    });
};
