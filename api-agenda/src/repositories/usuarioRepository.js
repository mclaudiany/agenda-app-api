const Usuario = require("../models/usuario");

exports.criarUsuario = async (data) => {
  return await Usuario.create(data);
};

exports.buscarPorEmail = async () => {
  return await Usuario.findOne({ where: { email } });
};
