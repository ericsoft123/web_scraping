var mysql = require('mysql'); 
exports.database_config = mysql.createConnection({
  
    /*host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:""*/

    /*host:"sql4.freemysqlhosting.net",
    port:3306,
    user:"sql4423462",
    database:"sql4423462",
    password:"9iWeUZQN2M",*/

    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD

  
});

