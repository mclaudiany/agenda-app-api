const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

//rota para mostrar que o servidor tá online
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Servidor funcionando...",
    timestamp: new Date().toISOString(),
  });
});

//rotas da api
app.use("/api", apiRoutes);

module.exports = app;
