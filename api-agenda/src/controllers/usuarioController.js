const usuarioService = require("../services/usuarioService");

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, cpf, telefone, email, senha } = req.body;

    if (!nome || !cpf || !telefone || !email || !senha) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    } else {
      const novoUsuario = {
        nome,
        cpf,
        telefone,
        email,
        senha,
      };

      const usuario = await usuarioService.criarUsuario(novoUsuario);
      return res.status(201).json(usuario);
    }
  } catch (err) {
    const status = err?.message === "Usuário não encontrado" ? 404 : 500;
    const message = err?.message || "Erro interno. Tente novamente mais tarde.";
    return res.status(status).json({ error: message });
  }
};

exports.buscarUsuarioPorEmail = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ message: "O campo email é obrigatório." });
    } else {
      const usuario = await usuarioService.buscarUsuarioPorEmail(email);
      return res.status(200).json(usuario);
    }
  } catch (err) {
    const status =
      err?.message ===
      "Erro ao buscar usuário por email. Tente novamente mais tarde."
        ? 400
        : 500;
    const message = err?.message || "Erro interno. Tente novamente mais tarde.";
    return res.status(status).json({ error: message });
  }
};
