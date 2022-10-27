//IMPORTAÇÃO DO MODULO DO SEQUELIZE
const Sequelize = require('sequelize');

const connection = new Sequelize(
    'clinica',
    'root',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }

);

module.exports = connection;
