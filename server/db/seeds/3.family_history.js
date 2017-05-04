const familyhistory = require('../family_history')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('familyhistory').del()
    .then(function () {
      // Inserts seed entries
      return knex('familyhistory').insert(familyhistory);
    });
};
