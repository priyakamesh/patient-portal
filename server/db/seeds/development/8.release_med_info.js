const release_med_info = require('../release_med_info')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('release_med_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('release_med_info').insert(release_med_info);
    });
};
