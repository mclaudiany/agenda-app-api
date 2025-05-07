const usuarioRepository = require("../repositories/usuarioRepository");
const auditoriaService = require("../services/auditoriaService");

exports.criarUsuario = async (novoUsuario) => {
  const usuario = await usuarioRepository.criarUsuario(novoUsuario);
  if (!usuario) {
    await auditoriaService.logAcao({
      id: 0,
      usuario: "anônimo",
      acao: `Falha ao cadastrar usuário ${ novoUsuario.nome }`,
      data: new Date(),
    });

    throw new Error("Usuário não cadastrado.");
  } else {
     await auditoriaService.logAcao({
       id: usuario.cpf,
       usuario: usuario.nome,
       acao: "Cadastro de usuário realizaod com sucesso.",
       data: new Date(),
     });
      return usuario;
  }
 
};

exports.buscarUsuarioPorEmail = async (email) => { 
  const usuario = await usuarioRepository.buscarPorEmail(email);
  if (!usuario) {
    await auditoriaService.logAcao({
      id: 0,
      usuario: "anônimo",
      acao: `Falha ao buscar usuário por email ${email}`,
      data: new Date(),
    });

    throw new Error("Usuário não encontrado.");
  }
  return usuario;
};
