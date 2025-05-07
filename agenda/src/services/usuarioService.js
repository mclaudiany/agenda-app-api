import axios from "axios";

const API_URL = "http://localhost:8080/api";
const USUARIO_PATH = "/usuario";
const LOGS_PATH = "/logs";

export const cadastrarUsuario = async (novoUsuario) => {
  const usuarioUrl = `${API_URL}${USUARIO_PATH}`;
  return await axios.post(usuarioUrl, novoUsuario);
};

export const buscarUsuarioPorEmail = async (email) => {
  const usuarioUrl = `${API_URL}${USUARIO_PATH}/email/${email}`;
  return await axios.get(usuarioUrl);
};

export const listarLogs = async () => {
  const logsUrl = `${API_URL}${LOGS_PATH}`;
  return await axios.get(logsUrl);
};
