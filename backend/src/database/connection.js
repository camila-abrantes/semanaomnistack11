const knex = require('knex');
const configuration = require('c:/Users/camil/Desktop/www/semanaomnistack/aulas/backend/knexfile');

const connection = knex(configuration.development);

module.exports = connection;