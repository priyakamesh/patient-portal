const insurance = require('../../insurance')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('insurance').del()
    .then(function () {
      // Inserts seed entries
      return knex('insurance').insert(insurance);
    });
};
