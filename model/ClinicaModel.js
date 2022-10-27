//IMPORTAÇÃO DO SEQUELIZE
const Sequelize = require('sequelize');

const connection = require('../database/database');

const ClinicaModel = connection.define(
    'tbl_clinica',
    {
        cod_paciente:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        telefone: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        celular: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
        nomeResponsavel: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        telefoneResponsavel: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
    }
)

//ClinicaModel.sync({force:true});

module.exports = ClinicaModel;