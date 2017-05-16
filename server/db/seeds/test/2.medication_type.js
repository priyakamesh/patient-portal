const medication_type = require('../../medication_type')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('medication_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('medication_type').insert(medication_type);
    });
};
