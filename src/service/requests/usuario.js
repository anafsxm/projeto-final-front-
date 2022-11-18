import { api } from "../api";

export const postLoginUsuario = (data) =>
  api({
    url: "login/logar",
    method: "POST",
    data,
  });

export function criaUsuario(data) {
  return api({
    url: `/user`,
    method: "POST",
    data,
  });
}
