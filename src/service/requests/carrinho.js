import { api } from "../api";
import { getAuthorizationToken } from "../actions";

export function getCarrinhoUsuario() {
  return api({
    url: "/carrinho",
    method: "GET",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
  });
}

export function atualizaCarrinhoUsuario(produtoId, qt) {
  return api({
    url: "/carrinho",
    method: "PUT",
    headers: {
      Authorization: `${getAuthorizationToken()}`,
    },
    data: {
      produtoId,
      qt,
    },
  });
}
