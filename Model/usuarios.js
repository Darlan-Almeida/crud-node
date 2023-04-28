const Sequelize = require('sequelize');
const {database} = require('../Control/config');
const bcrypt = require('bcrypt');




const usuarios = database.define("usuarios" , {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    data_nascimento : {
        type: Sequelize.DATE,
        allowNull: false
    },
    escola_frequentada : {
        type: Sequelize.STRING,
        allowNull: false

    },
    ocupacao_institucional : {
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
    },
    }, {
        hooks: {
          beforeSave: async (usuario) => {
            if (usuario.changed('senha')) {
              usuario.senha = await bcrypt.hash(usuario.senha, 10);
            }
          },
        },
})


module.exports = usuarios