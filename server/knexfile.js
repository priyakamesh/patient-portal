// Update with your config settings.


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'patient_portal'
    },
     migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'patient_portal'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'patient_portal'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};