const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool
  .getConnection()
  .then(() => {
    console.log("Banco conectado!");
  })
  .catch((err) => {
    console.error("Erro ao conectar:", err.message);
  });

module.exports = pool;