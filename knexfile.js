// Update with your config settings.
require("dotenv").config();

const PGDB_USER = process.env.PGDB_USER;
const PGDB_PW = process.env.PGDB_PW;
const PGDB_NAME = process.env.PGDB_NAME;

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: PGDB_NAME,
      user:     PGDB_USER,
      password: PGDB_PW
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
      database: PGDB_NAME,
      user:     PGDB_USER,
      password: PGDB_PW
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
    client: 'pg',
    connection: {
      database: PGDB_NAME,
      user:     PGDB_USER,
      password: PGDB_PW
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
