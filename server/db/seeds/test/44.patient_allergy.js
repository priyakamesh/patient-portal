const patient_allergy = require('../patient_allergy')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patient_allergy').del()
    .then(function () {
      // Inserts seed entries
      return knex('patient_allergy').insert(patient_allergy);
    });
};
