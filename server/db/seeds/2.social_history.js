const socialhistory = require('../social_history')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('socialhistory').del()
    .then(function () {
      // Inserts seed entries
      return knex('socialhistory').insert(socialhistory);
    });
};
