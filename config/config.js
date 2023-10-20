//Iremos exportar um objeto de configuração da sequelize cli
//para que o sequeliza possa se comunicar com o banco
module.exports = {
    development: {
      dialect: 'postgres',
      host: 'localhost',
      port: '5432',
      database: 'onebitflix_development',
      username: "postgres",
      password: "wallace357",
    }
  }
//Precisamos nos atentar as credenciais para o acesso do banco de dados
//não podem ficar acessíveis, pois este código ficará disponível no git...
//Mais pra frente iremos trabalhar com as variáveis de ambiente para estar solucionando este problema
//mas por enquanto, iremos manter visíveis pois estamos no ambiente de desenvolvimento.