const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('patients').del()
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('priya', salt);
    return Promise.join(
      knex('patients').insert({
        email: 'michael@gmail.com',
        password: hash
      })
    );
  });
};
