const insurance_type = require('../../insurance_type')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('insurance_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('insurance_type').insert(insurance_type);
    });
};
