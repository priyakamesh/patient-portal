const patient_doctor = require('../../patient_doctor')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patient_doctor').del()
    .then(function () {
      // Inserts seed entries
      return knex('patient_doctor').insert(patient_doctor);
    });
};
