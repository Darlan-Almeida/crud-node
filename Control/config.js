const Sequelize = require('sequelize')


const database = new Sequelize ('labmaker', 'dvnro7j8p202uj0mr97d' ,'pscale_pw_LZPlCm8eFOmj68Fgqbz2KnRwAF44DNOnjkJ1Rak5OAB' , { host: "aws.connect.psdb.cloud",
dialect: "mysql",
dialectOptions: {
  ssl: {
    rejectUnauthorized: true
  },
},

})



database.authenticate().then(function() {
  console.log("conectado com sucesso")
}).catch(function(erro) {
  console.log("falha ao conectar:" + erro)
  
})

module.exports = {
  database
};

