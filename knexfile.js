// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: process.env.PGDB_NAME,
      user:     process.env.PGDB_USER,
      password: process.env.PGDB_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: process.env.PGDB_NAME,
      user:     process.env.PGDB_USER,
      password: process.env.PGDB_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.PGDB_NAME,
      user:     process.env.PGDB_USER,
      password: process.env.PGDB_PW
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
