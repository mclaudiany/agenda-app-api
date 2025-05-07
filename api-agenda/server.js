const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = process.env.PORT || 8080;


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Conectado ao banco de dados");

//     app.listen(PORT, () => {
//       console.log(`Servidor rodando na porta ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Erro ao conectar ao banco de dados:", err);
//   });

 app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`);
 });