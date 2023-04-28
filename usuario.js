const Sequelize = require('sequelize');
const database = require('./db');


const usuarios = database.define("usuarios" , {
    id: {
        type: Sequelize.INTEGER,
        autoIncremment: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    data_nascimento : {
        type: Sequelize.DATE,
        allowNull: false
    },
    escola_frequentada : {
        type: Sequelize.STRING(150),
        allowNull: false

    },
    ocupação_institucional : {
        type: Sequelize.STRING,
        allowNull: false
    },
    periodo_escolar : {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha : {
    type: Sequelize.STRING,
    allowNull: false
    }
})


module.exports = usuarios