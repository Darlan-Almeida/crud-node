const {database} = require('../Control/config');
const usuarios = require('../Model/usuarios');

database.getQueryInterface().showAllTables().then(function(tableNames) {
  if (tableNames.includes('usuarios')) {
    console.log('Tabela "usuarios" já existe');
  } else {
    usuarios.sync().then(() => {
      console.log("Tabela 'usuarios' criada com sucesso.");
    }).catch((error) => {
      console.log("Erro ao criar tabela 'usuarios':", error);
    });
  }
}).catch((error) => {
  console.log("Erro ao verificar se a tabela 'usuarios' já existe:", error);
});

async function inserirConta(dadosConta) {
  try {
    const novaConta = await usuarios.create(dadosConta);
    console.log('Nova conta inserida:', novaConta.get());
  } catch (erro) {
    console.error('Falha ao inserir nova conta, confira se esse email já foi cadastrado');
  }
}

module.exports = inserirConta;
