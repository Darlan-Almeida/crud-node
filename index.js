const Sequelize = require('sequelize')

const sequelize = new Sequelize ('labmaker', 's68qwp82t092bfebr25s' ,'pscale_pw_W6CEqZB1hYjAOZQztrliKppstscjO7Wan32Jzxr6355' , { host: "aws.connect.psdb.cloud",
dialect: "mysql",
dialectOptions: {
  ssl: {
    rejectUnauthorized: true
  },
},

})


sequelize.authenticate().then(function() {
  console.log("conectado com sucesso")
}).catch(function(erro) {
  console.log("falha ao conectar:" + erro)
  
})


DATABASE_URL='mysql://s68qwp82t092bfebr25s:pscale_pw_W6CEqZB1hYjAOZQztrliKppstscjO7Wan32Jzxr6355@aws.connect.psdb.cloud/labmaker?ssl={"rejectUnauthorized":true}'


// Definição do modelo para a tabela "usuarios"
const usuarios = sequelize.define('usuarios', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome_completo: {
    type: Sequelize.STRING(255)
  },
  email_institucional: {
    type: Sequelize.STRING(255)
  },
  data_nascimento: {
    type: Sequelize.DATE
  },
  escola_frequentada: {
    type: Sequelize.STRING(255)
  },
  ocupacao_institucional: {
    type: Sequelize.STRING(150)
  },
  periodo_escolar: {
    type: Sequelize.STRING(150),
    allowNull: true
  },
  senha: {
    type: Sequelize.STRING(255)
  }
});
/*
// Função de inserção de dados na tabela "usuarios"
async function inserirConta(dadosConta) {
  try {
    // Cria uma nova instância do modelo "Conta" com os dados fornecidos
    const novaConta = await usuarios.create(dadosConta);
    console.log('Nova conta inserida:', novaConta.get());
  } catch (erro) {
    console.error('Falha ao inserir nova conta:', erro);
  }
}

// Exemplo de uso da função de inserção de dados
const dadosNovaConta = {
  nome_completo: 'Nome Completo',
  email_institucional: 'email@institucional.com',
  data_nascimento: '1990-01-01',
  escola_frequentada: 'Escola XYZ',
  ocupacao_institucional: 'discente',
  periodo_escolar: 'fundamental',
  senha: 'senha123'
};

inserirConta(dadosNovaConta);
*/