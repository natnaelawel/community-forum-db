// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:  "postgres://postgres:0912345678@localhost/community_forum"
  },

  
  production: {
    client: 'pg',
    connection:  process.env.DATABASE_URL,
  },
  
};


  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'community_forum',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }