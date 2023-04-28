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


DATABASE_URL='mysql://rz4nktjbz2u59j436gpj:pscale_pw_iYQAeT2jBgylLr3MNt2ScgHx93hd15mTg0kBWZZtaxX@aws.connect.psdb.cloud/labmaker?ssl={"rejectUnauthorized":true}'

/*
const resultadoCreate =  usuarios.create({
    nome: 'Fábio',
    email: "Fábio10@gmail.com",
    data_nascimento: 2023-04-24,
    escola_frequentada: "IFPB",
    ocupação_institucional: "discente",
    periodo_escolar: "3º ano do ensino médio",
    senha: "123"

})
console.log(resultadoCreate); */