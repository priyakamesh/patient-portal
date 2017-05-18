const patient_history = require('../../patient_history')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patient_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('patient_history').insert(patient_history);
    });
};
