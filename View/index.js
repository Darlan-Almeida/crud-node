//clear code ok
//conecta ao bd no planetscale  ok
//cria uma tabela no bd ok
//criptografia a senha ok
// não permitir emails e nome diplicados ok
// enviar codigo de verificação para o email antes da homologação no BD


const inserirConta = require("../Control/db")

// Exemplo de uso da função de inserção de dados
const dadosNovaConta = {
  nome: 'Nome Completo',
  email: '000705407@institucional.com',
  data_nascimento: 2023-04-26,
  escola_frequentada: 'Escola XYZ',
  ocupacao_institucional: 'discente',
  periodo_escolar: 'fundamental',
  senha: 'senha123'
};


inserirConta(dadosNovaConta)


