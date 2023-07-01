const Sequelize = require('sequelize')


const database = new Sequelize (DB, users ,password , { host: host,
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

